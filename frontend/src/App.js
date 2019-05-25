import React, { Fragment } from "react";
import "./App.css";

// Components
import CalendarDisplay from "./components/CalendarDisplay";
import SelectedDayModal from "./components/SelectedDayModal";
import DateSelector from "./components/DateSelector";

// Context
import Provider, { MyContext } from "./components/Provider";

const App = () => {
  return(
    <Provider>
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <CalendarDisplay {...context} />
            <SelectedDayModal {...context} />
            <DateSelector {...context} />
          </Fragment>
        )}
      </MyContext.Consumer>
    </Provider>
  )
}

export default App;