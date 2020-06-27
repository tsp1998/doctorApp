import React from "react";

//commons
import { Button } from "../common";

import { connect } from "react-redux";
import { bookApointment } from "../redux/actions/doctorActions";

function DoctorCard({
  doctor,
  bookApointment,
  bookingApointment,
  authenticated,
  currentDoctor,
}) {
  const handleBookApointment = (doctorId) => {
    document.getElementById(`btn${doctorId}`).classList.remove("btn-primary");
    document.getElementById(`btn${doctorId}`).classList.add("btn-success");
    bookApointment(doctorId);
  };
  return (
    <div
      className="card"
      style={{ width: "18rem", textAlign: "center", margin: "1rem" }}
    >
      <div className="text-center">
        <img
          className="card-img-top text-center"
          src="/assets/images/doctor.jpg"
          alt="Card image cap"
          style={{ width: "5rem" }}
        />
        <hr width="50%" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text">{doctor.email}</p>
        <p className="card-text">{doctor.phone}</p>
        {authenticated && (
          <Button
            id={`btn${doctor.id}`}
            disabled={doctor.apointment ? true : false}
            className="btn btn-primary"
            onClick={() => handleBookApointment(doctor.id)}
          >
            {bookingApointment && currentDoctor.id === doctor.id ? (
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                {currentDoctor &&
                currentDoctor.apointment &&
                currentDoctor.id === doctor.id
                  ? "Apointement Booked"
                  : "" || doctor.apointment
                  ? "Apointement Booked"
                  : "Book Apointement"}
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentDoctor: state.doctor.currentDoctor,
  authenticated: state.user.authenticated,
  bookingApointment: state.doctor.bookingApointment,
});
const mapActionsToProps = { bookApointment };
export default connect(mapStateToProps, mapActionsToProps)(DoctorCard);
