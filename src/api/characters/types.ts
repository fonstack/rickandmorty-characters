export declare namespace ServerCharacter {
  interface ServerResponse {
    id: string;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    __typename: 'Character';
  }
}

export declare namespace ServerCharacters {
  interface ServerResponse {
    pageInfo: {
      count: number;
      next: number | null;
      prev: number | null;
      __typename: 'Info';
    };
    characters: Array<ServerCharacter.ServerResponse>;
    __typename: 'Characters';
  }
}

export interface Characters {
  pageInfo: {
    count: number;
    next: number | null;
    prev: number | null;
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
  isFavorite?: boolean; // Post computed property
}

export enum QueryTypes {
  CHARACTERS = 'characters',
  CHARACTERS_BY_IDS = 'charactersByIds',
}
