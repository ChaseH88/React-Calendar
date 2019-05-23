import React from "react";

// All Months
const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Month = ({ month }) => {
  return(
    <div className="month">
      <h2>{monthsInYear[month]}</h2>
    </div>
  )
}

export default Month;