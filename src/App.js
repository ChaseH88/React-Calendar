import React, { Fragment } from "react";

// Components
import CalendarDisplay from "./components/CalendarDisplay";

// Context
import Provider, { MyContext } from "./components/Provider";

const App = () => {
  return(
    <Provider>
      <MyContext.Consumer>
        {context => (
          <CalendarDisplay {...context} />
        )}
      </MyContext.Consumer>
    </Provider>
  )
}

export default App;