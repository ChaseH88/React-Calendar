import React, { Fragment } from "react";
import moment from "moment";

// Styled Component
import { SelectedDayModalStyle } from "./styled-components/SelectedDayModal";

const SelectedDayModal = (props) => {
  
  const { showSelected, selectedDay } = props.state;

  const checkSelectedDay = () => {
    if(showSelected) return(
      <SelectedDayModalStyle>
        <div className="modal">
          <button className="close" onClick={()=> props.closeActiveDayModal()}>X</button>
          <div className="container">
            <div className="date">
              <h2>{moment(selectedDay).format("dddd, MMMM Do YYYY")}</h2>
            </div>
            <p>This is a placeholder.</p>
          </div>
        </div>
      </SelectedDayModalStyle>
    )
  }

  return(
    <Fragment>
      {checkSelectedDay()}
    </Fragment>
  )
}

export default SelectedDayModal;