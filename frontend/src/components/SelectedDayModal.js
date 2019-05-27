import React, { Fragment } from "react";
import moment from "moment";
import { graphql } from 'react-apollo';
import styled from "styled-components";

// GraphQL Query
import { getEventsQuery } from "../query/main";

// Styled Component
import { SelectedDayModalStyle } from "./styled-components/SelectedDayModal";

// Components
import NewEvent from "./AddNewEvent";

// Styles
const EventStyle = styled.div`
  display: block;
`;

const SelectedDayModal = (props) => {

  // Grab from props
  const { selectedDay, addEvent } = props.state;
  // Grab from apollo
  const { data } = props;
  console.log(data);

  // Event Count
  let count = 0;

  return(
    <Fragment>
      <SelectedDayModalStyle>
        <div className="modal">
          <button className="close" onClick={()=> props.closeActiveDayModal()}>X</button>
          <div className="container">
            <div className="date">
              <h2>{moment(selectedDay).format("dddd, MMMM Do YYYY")}</h2>
            </div>
            <div className="events">
            {data.events.map((event, i) => {
              let d = new Date(event.date);
              let dDay = d.getDate();
              let dMonth = d.getMonth();
              let dYear = d.getFullYear();
              if(selectedDay.getDate() === dDay && selectedDay.getMonth() === dMonth && selectedDay.getFullYear() === dYear){
                count++
                return(
                  <EventStyle className="event" key={`${d.getTime().toString()}${i}`}>
                    <strong>Name: <span>{event.name}</span></strong>
                    <strong>Type: <span>{event.type}</span></strong>
                    <strong>Author:<span>{event.author}</span></strong>
                    <strong>Added to Calendar on: <span>{moment(event.createdOn).format("MMMM Do YYYY")}</span></strong>
                  </EventStyle>
                )
              } else {
                return "";
              }
            })}
            {count === 0 && <div>No events found for this day.</div>}
            </div>
            <div className="addEvent">
              <button onClick={props.openAddEventToDay}>Add Event</button>
            </div>
            {addEvent && <NewEvent selectedDate={selectedDay} closeModal={props.closeAddEventToDay} />}
          </div>
        </div>
      </SelectedDayModalStyle>
    </Fragment>
  )
}

export default graphql(getEventsQuery)(SelectedDayModal);