import { gql } from 'graphql-request';

export const getCharactersByPageQuery = gql`
  query getCharactersByPage($pageNumber: Int!, $statusFilter: String!) {
    response: characters(page: $pageNumber, filter: { status: $statusFilter }) {
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

export const getCharactersByIdsQuery = gql`
  query getCharactersByIds($ids: [ID!]!) {
    response: charactersByIds(ids: $ids) {
      id
      name
      image
      status
      species
      gender
    }
  }
`;
