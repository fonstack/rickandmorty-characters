import { Character } from '../../api/characters';

export interface CharacterCardProps {
  character: Character;
  onFavSelected: (characterId: number) => void;
}
