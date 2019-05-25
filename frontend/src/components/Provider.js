import React, { Component, createContext } from 'react';

// Create the Context
export const MyContext = createContext();

// Provider Component
class Provider extends Component {
  
  state = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    showSelected: false,
    selectedDay: null,
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

  // Show active day
  activeDay = (day) => {
    this.setState({
      showSelected: true,
      selectedDay: day,
    });
  }

  closeActiveDayModal = () => {
    this.setState({
      showSelected: false,
      selectedDay: null,
    });
  }

  render(){
    return (
      <MyContext.Provider value={{
        state: this.state,
        updateYear: this.updateYear,
        updateMonth: this.updateMonth,
        activeDay: this.activeDay,
        closeActiveDayModal: this.closeActiveDayModal
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Provider;