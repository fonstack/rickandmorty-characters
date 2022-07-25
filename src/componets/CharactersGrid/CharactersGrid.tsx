import { Masonry, RenderComponentProps, useInfiniteLoader } from 'masonic';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { StyledCharactersGrid } from './styles';
import { CharactersGridProps } from './types';
import { Character } from '../../api/characters';

const CharactersGrid = ({
  characters,
  onAddFavCharacter,
  onRemoveFavCharacter,
  onNeedFetchMoreCharacters,
  testId,
}: CharactersGridProps) => {
  const checkIfLoadMore = useInfiniteLoader<Character, any>(onNeedFetchMoreCharacters, {
    isItemLoaded: (idx, characters) => !!characters[idx],
  });

  const VirtualizedCard = ({ data: character }: RenderComponentProps<Character>) => {
    return (
      <CharacterCard character={character} onFavSelected={character.isFavorite ? onRemoveFavCharacter : onAddFavCharacter} />
    );
  };

  return (
    <StyledCharactersGrid data-testid={testId}>
      <Masonry
        itemKey={(character) => character.id}
        items={characters}
        columnGutter={24}
        columnWidth={205}
        render={VirtualizedCard}
        onRender={onNeedFetchMoreCharacters ? checkIfLoadMore : undefined}
      />
    </StyledCharactersGrid>
  );
};

export { CharactersGrid };
