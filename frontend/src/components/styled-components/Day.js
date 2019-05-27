import styled from "styled-components";

export const DayStyle = styled.div`
  min-height: 50px;
  height: 6vw;
  max-height: 200px;
  box-shadow: inset 0 0 0px 1px #eadfdf;
  position: relative;
  &.today {
    background-color: #EDF7B5;
  }
  &.notCurrent {
    background-color: #f3f3f3;
  }
  & > button {
    display: block;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: background-color 200ms ease;
    &:hover {
      background-color: #EDF7D2;
    }
    &:focus {
      outline: none;
    }
    & .num {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      bottom: auto;
      border: 1px solid #eadfdf;
      border-top: 0;
      border-right: 0;
      height: 35px;
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      & span {
        font-size: 13px;
        color: #252525
      }
    }
  }
`;