import React, { Fragment } from "react";

// Components
import Week from "./Week";
import Month from "./Month";

// Styled Components
import { WeekStyle } from "./styled-components/Week";

// Temp, will be eventually generated through state
let year = new Date().getFullYear();
let month = new Date().getMonth();


const Calendar = () => {

  let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

  // Generate the days of the week in the header
  const generateDaysOfWeek = () => {
    let days = daysOfTheWeek.map(day => {
      return(
        <div className="day">
          {day}
        </div>
      )
    });
    return(
      <WeekStyle className="week">
        {days}
      </WeekStyle>
    );
  }

  // Generate the Weeks
  const calendarWeeks = () => {
    //get the total number of days in the current month
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    // Month Data
    let monthData = {
      currentMonth: month, 
      weeks: []
    };
    
    // dynamically count the weeks needed (majority will be 5)
    let numWeeks = Math.floor((daysInMonth / 7) + 1);
    for(let h=0; h < numWeeks; h++){
      monthData.weeks[h] = [];
    }
    
    //get all the individual days from the month and sort
    let weekCount = 0; // count the weeks, increment when "Sunday"
    for(let i=1; i <= daysInMonth; i++){
      let dayInMonth = new Date(year, month, i);

      //increment the week count if the day is sunday
      let day = dayInMonth.toString().toLowerCase().substring(0, 3);
      if(day === "sun" && i !== 1) weekCount++;

      //add the days to the corresponding week
      monthData.weeks[weekCount].push(dayInMonth);
    }

    // grab the data
    let { currentMonth, weeks } = monthData; 
    
    // Render The Calendar
    return(
      <Fragment>
        <Month month={currentMonth} key={`month${currentMonth}`} />
        {generateDaysOfWeek()}
        {monthData.weeks.map((week, index) => {
          return(<Week {...week} key={`week${index}`} year={year} month={month} />)
        })}
      </Fragment>
    )
    

  }
  
  return (
    <div id="calendar">
      
      {calendarWeeks()}
    </div>
  );
}

export default Calendar;