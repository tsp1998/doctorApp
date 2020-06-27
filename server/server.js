const path = require("path")
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const { MONGOURL } = require("./config/keys");

const app = express();

app.use(cors());
app.use(express.json());
//hello
app.use((req, res, next) => {
  req.PORT = PORT;
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")))
// app.use(express.static(path.join(__dirname, "images")))
app.use("//assets/images", express.static(path.join(__dirname,"assets", "images")))

//routes and apis
app.use("/api/", require("./routes/api/v1/user-routes"));
app.use("/api/", require("./routes/api/v1/doctor-routes"));
app.use("/", require("./routes/api/v1/rnRoutes"));

// error handling middleware
app.use((err, req, res, next) => {
  const status = err.statusCode || 404;
  const message = err.message;
  const data = err.data;
  const error = { message, data };
  console.log(error);
  res.status(status).json(error);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to TUTS" });
});

let message;
try {
  mongoose.connect(
    MONGOURL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) message = err;
      else message = "Database Connection Success";
      console.log(message);
    }
  );
} catch (error) {
  message = error;
  console.log(error);
}

app.get("/db", (req, res) => {
  res.json({ message });
});

app.listen(PORT, (err) => {
  if (err) return console.log("Error: ", err);
  console.log(`Listening On Port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
