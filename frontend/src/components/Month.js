import React from "react";

// All Months
const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Month = ({ month, year }) => {
  return(
    <div className="month" style={{textAlign: "center"}}>
      <h2>{monthsInYear[month]} {year}</h2>
    </div>
  )
}

export default Month;