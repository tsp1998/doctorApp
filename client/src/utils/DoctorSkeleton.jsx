import React from "react";
import { LoadingCard } from "../common";
function DoctorSkeleton() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <LoadingCard />
        </div>
      </div>
    </div>
  );
}

export default DoctorSkeleton;
