import { Character, CharactersPage, ServerCharacters } from './types';

export const charactersTransform = (data: ServerCharacters.ServerResponse): CharactersPage => {
  const characters: Character[] = data.characters.map((character) => ({
    id: Number(character.id),
    name: character.name,
    image: character.image,
    species: character.species,
    status: character.status.toLowerCase() as Character['status'],
    gender: character.gender.toLowerCase() as Character['gender'],
  }));

  return {
    ...data,
    characters,
  };
};
