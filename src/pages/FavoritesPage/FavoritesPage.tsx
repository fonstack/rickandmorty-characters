import { useMemo } from 'react';
import { useCharactersByIds } from '../../api/characters';
import { CharacterCard } from '../../componets';
import { useFavUsersState } from '../../store';

const FavoritesPage = () => {
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();
  const { data } = useCharactersByIds(favCharactersIds);

  const favCharacters = useMemo(() => (data ? data.map((character) => ({ ...character, isFavorite: true })) : []), [data]);

  return (
    <>
      <h1>Favorites</h1>

      {favCharacters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onFavSelected={character.isFavorite ? removeFavCharacter : addFavCharacter}
        />
      ))}
    </>
  );
};

export { FavoritesPage };
