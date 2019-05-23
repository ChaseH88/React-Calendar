import React from "react";

const Day = (props) => {

  // Grab the day data
  const { date } = props;

  // HOOK UP MOMENT NEXT

  return(
    <div className="day">
      {date.toString()}
    </div>
  )
}

export default Day;