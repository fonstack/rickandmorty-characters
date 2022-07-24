import { graphql } from 'msw';
import { createFakeCharactersResponse, createFakeFavCharacterResponse } from '../api/characters/mockData';

/**
 * All the interceptors for the API (for returning testing mock data)
 */
export const handlers = [
  graphql.query('getCharactersByPage', (req, res, ctx) => {
    return res(
      ctx.data({
        response: createFakeCharactersResponse(),
      })
    );
  }),
  graphql.query('getCharactersByIds', (req, res, ctx) => {
    return res(
      ctx.data({
        response: createFakeFavCharacterResponse(),
      })
    );
  }),
];
