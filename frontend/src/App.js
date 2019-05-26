import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

// Context
import Provider from "./components/Provider";

// Main Calendar Component
import Calendar from "./components/Calendar";

//Apollo Client Setup
var root = "http://localhost:4000/graphql";
const client = new ApolloClient({uri: root});

const App = () => {
  return(
    <ApolloProvider client={client}>
      <Provider>
        <Calendar />
      </Provider>
    </ApolloProvider>
  )
}

export default App;