import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCharactersByIds } from '../../api/characters';
import { Button } from '../../componets/Button/Button';
import { CharactersGrid } from '../../componets/CharactersGrid/CharactersGrid';
import { Paths } from '../../navigation';
import { useFavUsersState } from '../../store';
import { ButtonWrapper, StyledTitle } from './styles';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();
  const { data, isLoading } = useCharactersByIds(favCharactersIds);

  const favCharacters = useMemo(() => (data ? data.map((character) => ({ ...character, isFavorite: true })) : []), [data]);

  const getDataStatus = useMemo((): string | null => {
    if (isLoading) return 'Loading fav characters...';
    if (favCharactersIds.length === 0) return 'You have no fav characters';
    return null;
  }, [isLoading, favCharactersIds]);

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

      {getDataStatus && (
        <ButtonWrapper>
          <Button onClick={favCharactersIds.length === 0 ? () => navigate(Paths.MARKETPLACE) : undefined}>{getDataStatus}</Button>
        </ButtonWrapper>
      )}

      <CharactersGrid
        key={`fav-characters-${favCharacters.length}`}
        testId="fav-characters"
        characters={favCharacters}
        onAddFavCharacter={addFavCharacter}
        onRemoveFavCharacter={removeFavCharacter}
      />
    </section>
  );
};

export { FavoritesPage };
