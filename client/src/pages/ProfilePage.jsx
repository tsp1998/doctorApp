import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import {
  loadDoctors,
  getApointments,
  bookApointment,
} from "../redux/actions/doctorActions";

//components
import { DoctorCard } from "../components";

//utils
import DoctorSkeleton from "../utils/DoctorSkeleton";

let apointments = 0;

function ProfilePage({
  doctor: { doctors, loadingDoctors },
  loadDoctors,
  getApointments,
  bookApointment,
}) {
  useEffect(() => {
    console.log("useEffect");
    loadDoctors();
    getApointments();
  }, []);
  const handleBookApointment = (doctorId) => {
    bookApointment(doctorId);
  };

  return (
    <div>
      {loadingDoctors ? (
        <DoctorSkeleton />
      ) : (
        <>
          {doctors.length && (
            <div className="container">
              <div className="row">
                {doctors.map((doctor) => {
                  if (doctor.apointment) {
                    apointments++;
                    return (
                      <div key={doctor.id} className="col-12 col-md-6 col-lg-4">
                        <DoctorCard
                          doctor={doctor}
                          bookApointment={handleBookApointment}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
          {apointments === 0 && <h1>No Apointments</h1>}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({ doctor: state.doctor });
const mapActionsToProps = { loadDoctors, getApointments, bookApointment };
export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);
