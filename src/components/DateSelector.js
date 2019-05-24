import React from "react";

const DateSelector = (props) => {
  
  const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Grab the month and the year
  const { month, year } = props;

  // Select the Month
  const generateSelectMonth = () => {

    // dynamically populate the select month option
    let monthSelector = [];
    monthsInYear.forEach((m, index) => {
      index === month ?
        monthSelector.push(<option value={index} key={m}>{m}</option>) :
        monthSelector.push(<option value={index} key={m}>{m}</option>)
    });
    // Return the HTML
    return(
      <select onChange={handleMonthChange} defaultValue={month}>
        {monthSelector}
      </select>
    )
  }

  
  // Handle the month change
  const handleMonthChange = (e) => {
    // When the month is changed, update the state
    let selected = e.target.value;
    console.log("Month", selected);
    //add logic to update the state
  }

  // Select the Year
  // dynamically populate the select month option
  const generateSelectYear = () => {
    // temp placeholder for html
    let selectYearArr = [];
    let yearsToShow = 4;

    // generate the years html and push to the array
    for(let i= -(yearsToShow); i <= yearsToShow; i++){
      // add selected if matches current year
      year+i === year ?
        selectYearArr.push(<option value={year+i} key={year+i}>{year+i}</option>) :
        selectYearArr.push(<option value={year+i} key={year+i}>{year+i}</option>)
    }
    // render the html
    return(
      <select onChange={handleYearChange} defaultValue={year}>
        {selectYearArr}
      </select>
    )
  }

  // Handle the year change
  const handleYearChange = (e) => {
    // When the year is changed, update the state
    let selected = e.target.value;
    console.log("Year", selected);
    //add logic to update the state
  }

  // Render the HTML
  return(
    <div id="dateSelector">
      <div className="month">
        {generateSelectMonth()}
      </div>
      <div className="year">
        {generateSelectYear()}
      </div>
    </div>
  )
}

export default DateSelector;