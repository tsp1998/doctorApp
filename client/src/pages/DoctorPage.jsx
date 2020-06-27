import React, { useEffect } from "react";

//redux
import { connect } from "react-redux";
import { loadDoctors, getApointments } from "../redux/actions/doctorActions";

//components
import { DoctorCard } from "../components";

//utils
import DoctorSkeleton from "../utils/DoctorSkeleton";

function DoctorPage({
  doctor: { doctors },
  loadDoctors,
  getApointments,
  bookApointment,
}) {
  useEffect(() => {
    loadDoctors();
    getApointments();
  }, []);

  return (
    <div>
      {!doctors.length ? (
        <DoctorSkeleton />
      ) : (
        <div className="container">
          <div className="row">
            {doctors.map((doctor) => {
              return (
                <div key={doctor.id} className="col-12 col-md-6 col-lg-4">
                  <DoctorCard doctor={doctor} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
const mapActionsToProps = { loadDoctors, getApointments };
export default connect(mapStateToProps, mapActionsToProps)(DoctorPage);
