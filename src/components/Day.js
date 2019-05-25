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

  const handleClick = (date) => {
    // get the selected month and year
    let month = date.getMonth();
    let year = date.getFullYear();
    // get the current month and year in the state
    console.log(props);
    console.log("--------above---------")
    if(props.year === year && props.month === month){
      props.activeDay(date);
    } else {
      //switch the month since the user selected day not in current month
      props.updateYear(year);
      props.updateMonth(month);
      props.activeDay(date);
    }
  }

  return(
    <DayStyle className={`day ${checkCurrentMonth(date, month)} ${checkCurrentDay(date)}`} title={moment(date).format("dddd, MMMM Do YYYY")}>
      <button onClick={()=> handleClick(date)}>
        <div className="num">
          <span>{moment(date).format("Do")}</span>
        </div>
      </button>
    </DayStyle>
  )
}

export default Day;