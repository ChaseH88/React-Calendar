import styled from "styled-components";

export const DayStyle = styled.div`
  min-height: 50px;
  height: 3vw;
  max-height: 200px;
  box-shadow: inset 0 0 0px 1px #eadfdf;
  &.notCurrent {
    opacity: .65;
  }
`;