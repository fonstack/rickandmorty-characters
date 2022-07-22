import { graphql } from 'msw';
import { createFakeCharactersResponse, createFakeFavCharacterResponse } from '../api/characters/mockData';

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
