import { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Character, useInfiniteCharacters } from '../../api/characters';
import { Button } from '../../componets/Button/Button';
import { CharactersGrid } from '../../componets/CharactersGrid/CharactersGrid';
import { useFavUsersState } from '../../store';
import { Badge, ButtonWrapper, StyledFilterOption, StyledFiltersWrapper, StyledTitle } from './styles';

const MarketplacePage = () => {
  const { ref: inViewRef, inView } = useInView();
  const [characterStatusFilter, setCharacterStatusFilter] = useState<Character['status']>('alive');
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteCharacters(characterStatusFilter);
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();

  /**
   * Fetch next page when user scrolls to the bottom of the page
   */
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  const characters = useMemo(() => {
    const allCharacters = data
      ? data.pages.reduce<Character[]>((characters, page) => [...characters, ...page.characters], [])
      : [];
    return allCharacters.map((character) => ({ ...character, isFavorite: favCharactersIds.includes(character.id) }));
  }, [data, favCharactersIds]);

  const getFetchingStatus = useMemo((): string | null => {
    if (isFetching) return 'Loading more characters...';
    if (hasNextPage) return 'Load More';
    return '⊙﹏⊙ all characters loaded ⊙﹏⊙';
  }, [isFetching, hasNextPage]);

  return (
    <section className="max-width-wrapper-inner">
      <StyledTitle>
        <Badge>
          by <strong>fonstack</strong>
        </Badge>
        <h1 data-testid="page-title">Explore</h1>
        <p>All the Rick and Morty series characters!</p>
      </StyledTitle>

      <StyledFiltersWrapper>
        <StyledFilterOption onClick={() => setCharacterStatusFilter('alive')} active={characterStatusFilter === 'alive'}>
          Alive
        </StyledFilterOption>
        <StyledFilterOption onClick={() => setCharacterStatusFilter('dead')} active={characterStatusFilter === 'dead'}>
          Dead
        </StyledFilterOption>
        <StyledFilterOption onClick={() => setCharacterStatusFilter('unknown')} active={characterStatusFilter === 'unknown'}>
          Unknown
        </StyledFilterOption>
      </StyledFiltersWrapper>

      <CharactersGrid
        testId="characters"
        characters={characters}
        onAddFavCharacter={addFavCharacter}
        onRemoveFavCharacter={removeFavCharacter}
      />

      {getFetchingStatus && (
        <ButtonWrapper>
          <Button ref={inViewRef}>{getFetchingStatus}</Button>
        </ButtonWrapper>
      )}
    </section>
  );
};

export { MarketplacePage };
