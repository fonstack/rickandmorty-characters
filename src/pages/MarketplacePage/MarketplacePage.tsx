import { useMemo, useState } from 'react';
import { Character, useInfiniteCharacters } from '../../api/characters';
import { Button } from '../../componets/Button/Button';
import { CharactersGrid } from '../../componets/CharactersGrid/CharactersGrid';
import { useFavUsersState } from '../../store';
import { Badge, ButtonWrapper, StyledFilterOption, StyledFiltersWrapper, StyledTitle } from './styles';

const MarketplacePage = () => {
  const [characterStatusFilter, setCharacterStatusFilter] = useState<Character['status']>('alive');
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteCharacters(characterStatusFilter);
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();

  const getMoreCharacters = () => {
    if (hasNextPage) fetchNextPage();
  };

  const totalCharactersCount = useMemo(() => (data ? data.pages[0].pageInfo.count : null), [data]);

  const characters = useMemo(() => {
    const allCharacters = data
      ? data.pages.reduce<Character[]>((characters, page) => [...characters, ...page.characters], [])
      : [];
    return allCharacters.map((character) => ({ ...character, isFavorite: favCharactersIds.includes(character.id) }));
  }, [data, favCharactersIds]);

  const getDataStatus = useMemo((): string | null => {
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
        <div className="main-title">
          <h1 data-testid="page-title">Explore</h1>
          <div className="main-title__quantity-container">
            <span className="quantity" data-testid="characters-count">
              {totalCharactersCount ?? '--'}
            </span>
            <span className="mute">characters found</span>
          </div>
        </div>
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
        key={`characters-grid-${characterStatusFilter}`}
        testId="characters"
        characters={characters}
        onAddFavCharacter={addFavCharacter}
        onRemoveFavCharacter={removeFavCharacter}
        onNeedFetchMoreCharacters={getMoreCharacters}
      />

      {getDataStatus && (
        <ButtonWrapper>
          <Button>{getDataStatus}</Button>
        </ButtonWrapper>
      )}
    </section>
  );
};

export { MarketplacePage };
