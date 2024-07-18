import React from "react";

function Rating({ count, rate }) {
  return (
    <>
      <span className="badge badge-pill bg-dark">{rate} / 5</span>
    </>
  );
}

export default Rating;
