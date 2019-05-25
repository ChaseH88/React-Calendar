import React from "react";
import styled from "styled-components";

const LoadingStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000005e;
  z-index: 13000;
  & span {
    display: inline-block;
    font-size: 6vw;
    color: #fff;
    animation: rotating 2s linear infinite;
    &:before {
      content: "\f110";
      font-family: FontAwesome;
    }
  }
`;

const Loading = () => (
  <LoadingStyle>
    <span></span>
  </LoadingStyle>
);

export default Loading;