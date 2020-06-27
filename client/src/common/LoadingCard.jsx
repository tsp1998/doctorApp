import React from "react";

function LoadingCard() {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div style={{ textAlign: "center", margin: "3rem" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
        aspernatur iste eius corporis est repellat repudiandae voluptates
        commodi sapiente beatae!
      </div>
    </div>
  );
}

export default LoadingCard;
