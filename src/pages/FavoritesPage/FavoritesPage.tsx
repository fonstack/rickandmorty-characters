import { useMemo } from 'react';
import { useCharactersByIds } from '../../api/characters';
import { CharactersGrid } from '../../componets/CharactersGrid/CharactersGrid';
import { useFavUsersState } from '../../store';
import { StyledTitle } from './styles';

const FavoritesPage = () => {
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();
  const { data } = useCharactersByIds(favCharactersIds);

  const favCharacters = useMemo(() => (data ? data.map((character) => ({ ...character, isFavorite: true })) : []), [data]);

  return (
    <section className="max-width-wrapper-inner">
      <StyledTitle>
        <h1 data-testid="page-title">Favorites</h1>
        <div>
          <span className="quantity" data-testid="characters-count">
            {favCharactersIds.length}
          </span>
          <span className="mute">favorite characters</span>
        </div>
      </StyledTitle>

      <CharactersGrid
        testId="fav-characters"
        characters={favCharacters}
        onAddFavCharacter={addFavCharacter}
        onRemoveFavCharacter={removeFavCharacter}
      />
    </section>
  );
};

export { FavoritesPage };
