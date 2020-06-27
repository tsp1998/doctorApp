import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//commons
import { Button, TextInput } from "../common";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: false,
    success: false,
    loading: false,
    message: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (!name || !email || !password || !confirmPassword)
      return alert("All Fields Required");
    else if (password != confirmPassword) return alert("Password Not Matched");
    else {
      this.setState({ loading: true });
      try {
        const res = await axios.post("/create-user", { name, email, password });
        if (res.data) {
          this.setState({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            success: true,
            errors: false,
            message: "Signed Up",
          });
        } else {
          this.setState({
            errors: true,
            success: false,
            message: "SignUp Failed",
          });
          console.log("Something Wrong");
        }
      } catch (error) {
        this.setState({
          errors: true,
          success: false,
          message: "SignUp Failed",
        });
        console.log(error);
      }
    }
    this.setState({ loading: false });
  };

  handleChane = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="signup-form" style={{ marginTop: "2rem" }}>
        <div style={{ position: "relative" }}>
          <div>
            <h1>Sign Up</h1>
          </div>
          <Link
            to="/signin-signup"
            className="btn btn-info"
            style={{ position: "absolute", right: "0", top: "0" }}
          >
            Sign In
          </Link>
        </div>
        <hr />
        {(this.state.errors || this.state.success) && (
          <div
            className={`alert ${this.state.errors ? "alert-danger" : ""} ${
              this.state.success ? "alert-success" : ""
            }`}
          >
            {this.state.message}
          </div>
        )}
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <TextInput
              name="name"
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChane}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <TextInput
              name="email"
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChane}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <TextInput
              name="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChane}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <TextInput
              name="confirmPassword"
              type="password"
              className="form-control"
              value={this.state.confirmPassword}
              onChange={this.handleChane}
            />
          </div>
          <div className="form-group">
            <Button
              className={`form-control btn ${
                this.state.loading ? "" : "btn-primary"
              } `}
            >
              {this.state.loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>Sign Up</>
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
