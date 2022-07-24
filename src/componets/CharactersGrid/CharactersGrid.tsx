import { CharacterCard } from '../CharacterCard/CharacterCard';
import { StyledCharactersGrid } from './styles';
import { CharactersGridProps } from './types';

const CharactersGrid = ({ characters, onAddFavCharacter, onRemoveFavCharacter, testId }: CharactersGridProps) => {
  return (
    <StyledCharactersGrid data-testid={testId}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onFavSelected={character.isFavorite ? onRemoveFavCharacter : onAddFavCharacter}
        />
      ))}
    </StyledCharactersGrid>
  );
};

export { CharactersGrid };
