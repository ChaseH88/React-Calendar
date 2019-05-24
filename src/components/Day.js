import React from "react";
import moment from "moment";

// Styles
import { DayStyle } from "./styled-components/Day";

const Day = (props) => {
  
  // Grab the day data
  const { date, month } = props;

  // Adds classes depending on if current month
  const checkCurrentMonth = (date, month) => {
    let className = "";
    date.getMonth() !== month ?
      className = "notCurrent" :
      className = "current";
    return className;
  }

  return(
    <DayStyle className={`day ${checkCurrentMonth(date, month)}`}>
      {moment(date).format("Do")}
    </DayStyle>
  )
}

export default Day;