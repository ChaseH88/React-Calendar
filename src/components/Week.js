import React from "react";
import Day from "./Day";

const Week = (props) => {
  
  const showDays = () => {

    // Grab the data out of the props
    const days = Object.keys(props)
    let daysArr = [];

    // Push to array for mapping
    for(let day of days){
      daysArr.push(props[day]);
    }
    
    // Render the days
    let dayRender = daysArr.map(day => {
      return <Day date={day} key={day.toString().toLowerCase().replace(/ /g,"")} />
    })
    return dayRender;
  }
  

  return(
    <div className="week">
      {showDays()}
    </div>
  )
}

export default Week;