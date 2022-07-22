import { InfiniteData } from './../../../node_modules/react-query/types/core/types.d';
import { Character, Characters, ServerCharacters, ServerCharacter } from './types';

/**
 * Transforms a single server character to a app character
 */
export const characterTransform = (data: ServerCharacter.ServerResponse): Character => {
  return {
    id: Number(data.id),
    name: data.name,
    image: data.image,
    species: data.species,
    status: data.status.toLowerCase() as Character['status'],
    gender: data.gender.toLowerCase() as Character['gender'],
  };
};

/**
 * Transforms an array of server character to an array of app characters
 */
export const charactersTransform = (data: ServerCharacters.ServerResponse): Characters => {
  return {
    characters: data.characters.map(characterTransform),
    pageInfo: {
      count: data.pageInfo.count,
      next: data.pageInfo.next,
      prev: data.pageInfo.prev,
    },
  };
};

/**
 * Transforms an array (pages) of Characters to app pages of Characters
 */
export const charactersPagesTransform = (data: InfiniteData<ServerCharacters.ServerResponse>): InfiniteData<Characters> => {
  const pages: Characters[] = data.pages.map(charactersTransform);

  return {
    pages,
    pageParams: data.pageParams,
  };
};
