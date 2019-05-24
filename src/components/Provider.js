import React, { Component, createContext } from 'react';

// Create the Context
export const MyContext = createContext();

// Provider Component
class Provider extends Component {
  
  state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  }

  render(){
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;