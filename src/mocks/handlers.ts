import { graphql } from 'msw';
import { createFakeCharactersResponse } from '../api/characters/mockData';

export const handlers = [
  graphql.query('getCharactersByPage', (req, res, ctx) => {
    return res(
      ctx.data({
        response: createFakeCharactersResponse(),
      })
    );
  }),
];
