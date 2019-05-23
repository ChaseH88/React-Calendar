import React from "react";
import Day from "./Day";
import styled from "styled-components";

// Temp, will be eventually generated through state
export let year = new Date().getFullYear();
export let month = new Date().getMonth();

// Styled Component
const WeekStyle = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 7fr);
    grid-gap: 0;
`;

const Week = (props) => {
  
  // Build out the days with the prop data
  const showDays = () => {

    // Grab the data out of the props
    const days = Object.keys(props)
    let daysArr = [];

    // Push to array for mapping
    for(let day of days){
      daysArr.push(props[day]);
    }
    
    // Add data for blank days
    if(daysArr.length < 7){
      //grab the day
      let day = daysArr[0].toString().toLowerCase().substring(0, 3);
      //check to see where days are needed to fill in
      if(day !== "sun"){
        // Get the total of days needed from the previous month
        let daysNeededCount = 7 - daysArr.length;
        // get the total of days in previous month
        let daysInMonth = 32 - new Date(year, month-1, 32).getDate();
        // get the increment for the loop based on difference in days needed
        let count = (daysInMonth-daysNeededCount)+1;
        let addedDays = [] // temp placeholder for fetched days

        // Add the needed days to the "addedDays" temp placeholder
        for(let i=count; i <= daysInMonth; i++){
          let dayInMonth = new Date(year, month-1, i);
          addedDays.push(dayInMonth);
        }
        // Merge the arrays to get the correct data
        daysArr = [...addedDays, ...daysArr];
      } else {
        // Get the total of days needed from the previous month
        let daysNeededCount = 7 - daysArr.length;
        // get the total of days in previous month
        let daysInMonth = 32 - new Date(year, month+1, 32).getDate();
        let addedDays = [] // temp placeholder for fetched days

        // Add the needed days to the "addedDays" temp placeholder
        for(let i=1; i <= daysNeededCount; i++){
          let dayInMonth = new Date(year, month+1, i);
          addedDays.push(dayInMonth);
        }
        // Merge the arrays to get the correct data
        daysArr = [...daysArr, ...addedDays];
        console.log(daysArr)
      }
    }

    // Render the days
    let dayRender = daysArr.map(day => {
      return <Day date={day} key={day.toString().toLowerCase().replace(/ /g,"")} />
    })
    return dayRender;
  }
  

  return(
    <WeekStyle className="week">
      {showDays()}
    </WeekStyle>
  )
}

export default Week;