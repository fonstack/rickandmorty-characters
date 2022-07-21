import { getCharactersByPage } from './queries';
import { ServerCharacters } from './types';
import graphQlClient from '../client';

export const getCharactersPaginated = async (pageNumber: number): Promise<ServerCharacters.ServerResponse> => {
  try {
    const data = await graphQlClient.request(getCharactersByPage, { pageNumber });
    return data.response as ServerCharacters.ServerResponse;
  } catch (error) {
    throw new Error(`Unknown error: ${error}`);
  }
};
