import React from "react";
import { graphql, compose } from 'react-apollo';
import styled from "styled-components";

// GraphQL Query
import { addEventMutation, getEventsQuery } from "../query/main";

// Styles
const FormStyle = styled.form`
  display: block;
`;

class NewEvent extends React.Component {
  
  state = {
    name: "",
    type: "",
    author: "",
    details: "",
    isRepeating: false,
    allDay: false,
    date: this.props.selectedDate
  }

  // componentDidMount(){
  //   console.log(this.props);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addEventMutation({
      variables: {
          name: this.state.name,
          type: this.state.type,
          author: this.state.author,
          details: this.state.details,
          isRepeating: this.state.isRepeating,
          allDay: this.state.allDay,
          date: this.state.date
      }, 
      refetchQueries: [{
        query: getEventsQuery
    }]
  });
  this.props.closeModal();
  }

  handleState = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: val
    });
  }

  render(){
    return(
      <FormStyle onSubmit={this.handleSubmit}>
        <h3>Add New Event</h3>
        <div className="formElm">
          <input placeholder="Event Name" type="text" name="name" onChange={this.handleState} />
        </div>
        <div className="formElm">
          <select name="type" onChange={this.handleState}>
            <option value="personal">Personal</option>
            <option value="bill">Bill</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="formElm">
          <input placeholder="Enter your name" type="text" name="author" onChange={this.handleState} />
        </div>
        <div className="formElm">
          <input placeholder="Enter details about this event" type="text" name="details" onChange={this.handleState} />
        </div>
        <div className="formElm">
          <p>Is this a repeating event?</p>
          <label>False</label><input type="radio" name="isRepeating" value="false" onChange={this.handleState} />
          <label>True</label><input type="radio" name="isRepeating" value="true" onChange={this.handleState} />
        </div>
        <div className="formElm">
          <p>Is this an all day event?</p>
          <label>False</label><input type="radio" name="allDay" value="false" onChange={this.handleState} />
          <label>True</label><input type="radio" name="allDay" value="true" onChange={this.handleState} />
        </div>
        <input type="hidden" name="date" value={this.props.selectedDate} />
        <div className="formElm">
          <button>Add Event!</button>
          <button onClick={this.props.closeModal}>Cancel</button>
        </div>
      </FormStyle>
    )
  }
}

export default compose(
  graphql(addEventMutation, {name: "addEventMutation"})
)(NewEvent);