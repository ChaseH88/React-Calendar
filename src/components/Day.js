import React from "react";
import moment from "moment";
import styled from "styled-components";

// Styled Component
const DayStyle = styled.div`
  min-height: 50px;
  height: 3vw;
  max-height: 200px;
  box-shadow: inset 0 0 0px 1px #eadfdf;
`;


const Day = (props) => {

  // Grab the day data
  const { date } = props;

  // HOOK UP MOMENT NEXT

  return(
    <DayStyle className="day">
      {moment(date).format("Do")}
    </DayStyle>
  )
}

export default Day;