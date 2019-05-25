import styled from "styled-components";

export const WeekStyle = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(7, 7fr);
    grid-gap: 0;
    &.days {
        & .day {
            text-align: center;
        }
    }
`;