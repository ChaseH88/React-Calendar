import React from "react";
import moment from "moment";
import { graphql } from 'react-apollo';

// GraphQL Query
import { getEventsQuery } from "../query/main";

// Styles
import { DayStyle } from "./styled-components/Day";

const Day = (props) => {
  
  // Get the data from apollo
  const { data } = props;
  if(data.loading) return(<div></div>);

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
        {data.events.map((event, i) => {
          let d = new Date(event.date);
          let dDay = d.getDate();
          let dMonth = d.getMonth();
          let dYear = d.getFullYear();
          if(date.getDate() === dDay && date.getMonth() === dMonth && date.getFullYear() === dYear){
            return(
              <div className="event" key={`${d.getTime().toString()}${i}`}>
                <span>{event.name}</span>
              </div>
            )
          } else {
            return "";
          }
        })}
      </button>
    </DayStyle>
  )
}

export default graphql(getEventsQuery)(Day);