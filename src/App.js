import React, { Fragment } from "react";

// Components
import CalendarDisplay from "./components/CalendarDisplay";
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
            <DateSelector {...context} />
          </Fragment>
        )}
      </MyContext.Consumer>
    </Provider>
  )
}

export default App;