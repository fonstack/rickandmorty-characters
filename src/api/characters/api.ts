import { getCharactersByPageQuery, getCharactersByIdsQuery } from './queries';
import { ServerCharacters, ServerCharacter } from './types';
import graphQlClient from '../client';

export const getCharactersPaginated = async (pageNumber: number): Promise<ServerCharacters.ServerResponse> => {
  try {
    const data = await graphQlClient.request(getCharactersByPageQuery, { pageNumber });
    return data.response as ServerCharacters.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};

export const getCharactersByIds = async (ids: number[]): Promise<ServerCharacter.ServerResponse[]> => {
  if (!ids || !ids.length) return [];

  try {
    const data = await graphQlClient.request(getCharactersByIdsQuery, { ids });
    return data.response as ServerCharacter.ServerResponse[];
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};
