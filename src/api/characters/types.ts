export declare namespace ServerCharacters {
  interface ServerResponse {
    pageInfo: {
      count: number;
      next: number;
      prev: number;
    };
    characters: Array<{
      id: string;
      name: string;
      image: string;
      status: string;
      species: string;
      gender: string;
    }>;
  }
}

export interface CharactersPage {
  pageInfo: {
    count: number;
    next: number;
    prev: number;
  };
  characters: Character[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: 'alive' | 'dead' | 'unknown';
  gender: 'female' | 'male' | 'Genderless' | 'unknown';
}

export enum QueryTypes {
  CHARACTERS = 'characters',
}
