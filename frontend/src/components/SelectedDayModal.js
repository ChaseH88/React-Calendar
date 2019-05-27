import React, { Fragment } from "react";
import moment from "moment";
import { graphql } from 'react-apollo';
import styled from "styled-components";

// GraphQL Query
import { getEventsQuery } from "../query/main";

// Styled Component
import { SelectedDayModalStyle } from "./styled-components/SelectedDayModal";
import { ButtonStyle } from "./styled-components/Button";

// Components
import NewEvent from "./AddNewEvent";

// Styles
const EventStyle = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  padding: 5px 15px;
  margin: 0 0 5px;
  & > div {
    &.left {
      text-align: left;
      flex: 1 1 35%;
    }
    &.right {
      text-align: right;
      flex: 1 1 65%;
      & span {
        font-size: 12px;
      }
    }
  }
  & span {
    display: block;
    &.name {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 5px;
    }
    &.details {
      font-size: 12px;
      font-style: italic;
    }
  }
`;

const SelectedDayModal = (props) => {

  // Grab from props
  const { selectedDay, addEvent } = props.state;
  // Grab from apollo
  const { data } = props;

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
                    <div className="left">
                      <span className="name">{event.name}</span>
                      <span className="details">{event.details}</span>
                    </div>
                    <div className="right">
                      <span className="type">Type: {event.type}</span>
                      <span className="added">Added By: {event.author}</span>
                      <span className="added">Added to Calendar on: {moment(event.createdOn).format("MMMM Do YYYY")}</span>
                    </div>
                  </EventStyle>
                )
              } else {
                return "";
              }
            })}
            {count === 0 && <div>No events found for this day.</div>}
            </div>
            <div className="addEvent">
              {!addEvent && <ButtonStyle onClick={props.openAddEventToDay}>Add Event</ButtonStyle>}
            </div>
            {addEvent && <NewEvent selectedDate={selectedDay} closeModal={props.closeAddEventToDay} />}
          </div>
        </div>
      </SelectedDayModalStyle>
    </Fragment>
  )
}

export default graphql(getEventsQuery)(SelectedDayModal);