import { InfiniteData } from './../../../node_modules/react-query/types/core/types.d';
import { Character, Characters, ServerCharacters, ServerCharacter } from './types';

/**
 * Transforms a single server character to a app character
 */
const characterTransform = (character: ServerCharacter.ServerResponse): Character => {
  return {
    id: Number(character.id),
    name: character.name,
    image: character.image,
    species: character.species,
    status: character.status.toLowerCase() as Character['status'],
    gender: character.gender.toLowerCase() as Character['gender'],
  };
};

/**
 * Transforms an array (pages) of Characters to app pages of Characters
 */
export const charactersPagesTransform = (data: InfiniteData<ServerCharacters.ServerResponse>): InfiniteData<Characters> => {
  const pages: Characters[] = data.pages.map((page) => ({
    characters: page.characters.map(characterTransform),
    pageInfo: {
      count: page.pageInfo.count,
      next: page.pageInfo.next,
      prev: page.pageInfo.prev,
    },
  }));

  return {
    pages,
    pageParams: data.pageParams,
  };
};
