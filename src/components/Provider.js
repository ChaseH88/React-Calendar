import React, { Component, createContext } from 'react';

// Create the Context
export const MyContext = createContext();

// Provider Component
class Provider extends Component {
  
  state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  }

  // Update Functions
  // year
  updateYear = (newYear) => {
    this.setState({
      year: newYear
    });
  }

    // month
    updateMonth = (newMonth) => {
      this.setState({
        month: newMonth
      });
    }

  render(){
    return (
      <MyContext.Provider value={{
        state: this.state,
        updateYear: this.updateYear,
        updateMonth: this.updateMonth
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;