import { Character, Characters, ServerCharacter, ServerCharacters } from './types';

export const createFakeCharacterResponse = (): ServerCharacter.ServerResponse => ({
  id: '1',
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  __typename: 'Character',
});

export const createFakeCharactersResponse = (): ServerCharacters.ServerResponse => ({
  characters: [
    {
      id: '1',
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      __typename: 'Character',
    },
    {
      id: '2',
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      __typename: 'Character',
    },
  ],
  pageInfo: {
    count: 2,
    next: 2,
    prev: undefined,
    __typename: 'Info',
  },
  __typename: 'Characters',
});

export const createFakeCharacter = (): Character => ({
  id: 1,
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'alive',
  species: 'Human',
  gender: 'male',
});

export const createFakeCharacters = (): Characters => ({
  characters: [
    {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'alive',
      species: 'Human',
      gender: 'male',
    },
    {
      id: 2,
      name: 'Morty Smith',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status: 'alive',
      species: 'Human',
      gender: 'male',
    },
  ],
  pageInfo: {
    count: 2,
    next: 2,
    prev: undefined,
  },
});
