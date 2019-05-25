import React, { Fragment } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

// Components
import CalendarDisplay from "./components/CalendarDisplay";
import SelectedDayModal from "./components/SelectedDayModal";
import DateSelector from "./components/DateSelector";

// Context
import Provider, { MyContext } from "./components/Provider";

//Apollo Client Setup
var root = "http://localhost:4000/graphql";
const client = new ApolloClient({uri: root});

const App = () => {
  return(
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App;