import { gql } from 'apollo-boost';

export const getEventsQuery = gql`
  {
    events {
      name
      date
      author
      type
      details
      isRepeating
      allDay
      createdOn
    }
  }
`;

export const addEventMutation = gql`
  mutation(
    $name: String!,
    $author: String!,
    $type: String!,
    $date: DateTime,
    $allDay: Boolean!,
    $details: String!,
    $isRepeating: Boolean!
  ) { 
    addEvent(
      name: $name,
      author: $author,
      type: $type,
      date: $date,
      allDay: $allDay,
      details: $details,
      isRepeating: $isRepeating,
    ) {
      id
    }
  }
`