import React, { Fragment } from "react";

// Components
import Calendar from "./components/Calendar";

// Temp, will be eventually generated through state
let year = new Date().getFullYear();
let month = new Date().getMonth();

const App = () => {
  return(
    <Fragment>
      <Calendar year={year} month={month} />
    </Fragment>
  )
}

export default App;