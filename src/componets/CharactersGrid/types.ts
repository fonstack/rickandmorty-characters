import { Character } from '../../api/characters';

export interface CharactersGridProps {
  characters: Character[];
  onAddFavCharacter: (characterId: number) => void;
  onRemoveFavCharacter: (characterId: number) => void;
  onNeedFetchMoreCharacters?: () => void;
  testId?: string;
}
