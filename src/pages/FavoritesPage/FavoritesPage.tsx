import { useMemo } from 'react';
import { useCharactersByIds } from '../../api/characters';
import { CharacterCard } from '../../componets';
import { useFavUsersState } from '../../store';

const FavoritesPage = () => {
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();
  const { data, isLoading } = useCharactersByIds(favCharactersIds);

  const favCharacters = useMemo(() => (data ? data.map((character) => ({ ...character, isFavorite: true })) : []), [data]);

  return (
    <section className="max-width-wrapper">
      <h1 data-testid="page-title">Favorites</h1>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div data-testid="fav-characters">
          {favCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onFavSelected={character.isFavorite ? removeFavCharacter : addFavCharacter}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export { FavoritesPage };
