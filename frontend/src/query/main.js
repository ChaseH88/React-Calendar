import { gql } from 'apollo-boost';

//Booklist Component
export const getEventsQuery = gql`
  {
    events {
      name
      date
    }
  }
`;