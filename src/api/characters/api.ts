import { getCharactersByPageQuery, getCharactersByIdsQuery } from './queries';
import { ServerCharacters, ServerCharacter } from './types';
import graphQlClient from '../client';

export const getCharactersPaginated = async (pageNumber: number): Promise<ServerCharacters.ServerResponse> => {
  try {
    const res = await graphQlClient.query({
      query: getCharactersByPageQuery,
      variables: { pageNumber },
    });
    return res.data.response as ServerCharacters.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};

export const getCharactersByIds = async (ids: number[]): Promise<ServerCharacter.ServerResponse[]> => {
  if (!ids || !ids.length) return [];

  try {
    const res = await graphQlClient.query({
      query: getCharactersByIdsQuery,
      variables: { ids },
    });
    return res.data.response as ServerCharacter.ServerResponse[];
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};
