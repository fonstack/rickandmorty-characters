import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Character, useInfiniteCharacters } from '../../api/characters';
import { CharacterCard } from '../../componets';
import { useFavUsersState } from '../../store';

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
    <div>
      <h1 data-testid="page-title">Marketplace</h1>
      <p>Total account: {totalCharactersCount && <span data-testid="characters-count">{totalCharactersCount}</span>}</p>

      {isLoading ? (
        <p>Loasing...</p>
      ) : (
        <div data-testid="characters">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onFavSelected={character.isFavorite ? removeFavCharacter : addFavCharacter}
            />
          ))}
        </div>
      )}

      {getFetchingStatus && <button ref={inViewRef}>{getFetchingStatus}</button>}
    </div>
  );
};

export { MarketplacePage };
