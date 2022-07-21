import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Character, useInfiniteCharacters } from '../../api/characters';
import { CharacterCard } from '../../componets';

const MarketplacePage = () => {
  const { ref: inViewRef, inView } = useInView();
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteCharacters();

  const totalCharactersCount = useMemo(() => (data ? data.pages[0].pageInfo.count : null), [data]);
  const characters = useMemo(() => {
    return data ? data.pages.reduce<Character[]>((characters, page) => [...characters, ...page.characters], []) : [];
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div>
      <h1>Marketplace</h1>
      <p>Total count: {totalCharactersCount}</p>

      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      <div ref={inViewRef}>Loading...</div>
    </div>
  );
};

export { MarketplacePage };
