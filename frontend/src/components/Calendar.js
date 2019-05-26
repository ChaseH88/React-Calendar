import React from "react";
import "../App.css";

// Components
import CalendarDisplay from "./CalendarDisplay";
import SelectedDayModal from "./SelectedDayModal";
import DateSelector from "./DateSelector";

// Context
import { MyContext } from "./Provider";

const Calendar = () => {
  return(
    <MyContext.Consumer>
      {(context => {
        return(
          <div id="calendar">
            <CalendarDisplay {...context} />
            <DateSelector {...context} />
            {context.state.showSelected && <SelectedDayModal {...context} />}
          </div>
        )
      })}
    </MyContext.Consumer>
  )
}

export default Calendar;