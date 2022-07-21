import { StyledCharacterCard } from './styles';
import { CharacterCardProps } from './types';

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <StyledCharacterCard>
      <p>{character.id}</p>
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </StyledCharacterCard>
  );
};

export { CharacterCard };
