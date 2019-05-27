import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #1d3368; 
  border: 1px solid transparent; 
  font-size: 16px; 
  color: #fff;
  padding: 5px 20px;
  transition: all 200ms ease;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #1d3368;
    border-color: #1d3368;
    background-color: #e1eaff;
  }
`;