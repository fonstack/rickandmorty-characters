import { gql } from 'graphql-request';

export const getCharactersByPage = gql`
  query getCharactersByPage($pageNumber: Int!) {
    response: characters(page: $pageNumber) {
      pageInfo: info {
        count
        next
        prev
      }
      characters: results {
        id
        name
        image
        status
        species
        gender
      }
    }
  }
`;
