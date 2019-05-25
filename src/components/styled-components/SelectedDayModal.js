import styled from "styled-components";

export const SelectedDayModalStyle = styled.div`
  position: fixed;
  background-color: #0000004f;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  & .modal {
    margin: 3vw auto;
    max-width: 70vw;
    min-width: 600px;
    box-shadow: 0 0 10px 0 #00000040;
    background-color: #fff;
    position: relative;
    border: 1px solid #848484;
    & > button.close {
      position: absolute;
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      cursor: pointer;
    }
    & .container {
      max-width: 90%;
      margin: 30px auto;
      & .date {
        text-align: center;
      }
    }
  }
`;