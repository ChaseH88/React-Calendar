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

  const checkCurrentDay = (date, month) => {
    let today = new Date();
    let todayClass = "";
    if (moment(today).format("MMMM D YYYY") === moment(date).format("MMMM D YYYY")){
      todayClass = "today";
    }
    return todayClass;
  }

  return(
    <DayStyle className={`day ${checkCurrentMonth(date, month)} ${checkCurrentDay(date)}`} title={moment(date).format("dddd, MMMM Do YYYY")}>
      <div className="num">
        <span>{moment(date).format("Do")}</span>
      </div>
    </DayStyle>
  )
}

export default Day;