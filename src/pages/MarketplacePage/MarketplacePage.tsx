import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Character, useInfiniteCharacters } from '../../api/characters';
import { CharactersGrid } from '../../componets/CharactersGrid/CharactersGrid';
import { useFavUsersState } from '../../store';
import { StyledTitle } from './styles';

const MarketplacePage = () => {
  const { ref: inViewRef, inView } = useInView();
  const { data, hasNextPage, fetchNextPage, isFetching, isLoading } = useInfiniteCharacters();
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();

  /**
   * Fetch next page when user scrolls to the bottom of the page
   */
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  const totalCharactersCount = useMemo(() => (data ? data.pages[0].pageInfo.count : null), [data]);

  const characters = useMemo(() => {
    const allCharacters = data
      ? data.pages.reduce<Character[]>((characters, page) => [...characters, ...page.characters], [])
      : [];
    return allCharacters.map((character) => ({ ...character, isFavorite: favCharactersIds.includes(character.id) }));
  }, [data, favCharactersIds]);

  const getFetchingStatus = useMemo((): string | null => {
    if (isFetching) return 'Loading more...';
    if (hasNextPage) return 'Load More';
    return null;
  }, [isFetching, hasNextPage]);

  return (
    <section className="max-width-wrapper-inner">
      <StyledTitle>
        <h1 data-testid="page-title">Explore</h1>
        <p>
          {totalCharactersCount && <strong data-testid="characters-count">{totalCharactersCount}</strong>}{' '}
          <span className="mute">characters found</span>
        </p>
      </StyledTitle>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CharactersGrid
          testId="characters"
          characters={characters}
          onAddFavCharacter={addFavCharacter}
          onRemoveFavCharacter={removeFavCharacter}
        />
      )}

      {getFetchingStatus && <button ref={inViewRef}>{getFetchingStatus}</button>}
    </section>
  );
};

export { MarketplacePage };
