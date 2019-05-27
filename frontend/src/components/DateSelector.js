import React from "react";

const DateSelector = (props) => {
  
  const monthsInYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Grab the month and the year
  const { month, year } = props.state;

  // Select the Month
  const generateSelectMonth = () => {

    // dynamically populate the select month option
    let monthSelector = [];
    monthsInYear.forEach((m, index) => {
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
    let selected = parseFloat(e.target.value);
    props.updateMonth(selected);
  }

  // Select the Year
  // dynamically populate the select month option
  const generateSelectYear = () => {
    // temp placeholder for html
    let selectYearArr = [];
    let yearsToShow = 4;

    // generate the years html and push to the array
    for(let i= -(yearsToShow); i <= yearsToShow; i++){
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
    let selected = parseFloat(e.target.value);
    props.updateYear(selected);
  }

  const generateTodayButton = () => {
    let d = new Date();
    let cMonth = d.getMonth();
    let cYear = d.getFullYear();
    if(cYear === year && cMonth === month){
      return(<button disabled key="gototoday" onClick={goToToday}>Go to Today</button>)
    } else {
      return(<button key="gototoday" onClick={goToToday}>Go to Today</button>)
    }
  }

  const goToToday = () => {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    props.updateYear(year);
    props.updateMonth(month);
  }

  // Render the HTML
  return(
    <div id="dateSelector">
      <div className="filter">
        <div style={{marginRight: "6px", display: "inline-block"}}>
          <label>Personal</label><input type="checkbox" value="personal" />
        </div>
        <div style={{marginRight: "6px", display: "inline-block"}}>
          <label>Bill</label><input type="checkbox" value="bill" />
        </div>
        <div style={{marginRight: "6px", display: "inline-block"}}>
          <label>Work</label><input type="checkbox" value="work" />
        </div>
        <div style={{marginRight: "6px", display: "inline-block"}}>
          <label>Other</label><input type="checkbox" value="other" />
        </div>
      </div>
      <div className="month">
        {generateSelectMonth()}
      </div>
      <div className="year">
        {generateSelectYear()}
      </div>
      <div className="today">
        {generateTodayButton()}
      </div>
    </div>
  )
}

export default DateSelector;