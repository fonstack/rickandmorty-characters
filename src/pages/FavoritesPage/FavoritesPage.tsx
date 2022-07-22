import { useFavUsersState } from '../../store';

const FavoritesPage = () => {
  const [favCharactersIds, addFavCharacter, removeFavCharacter] = useFavUsersState();

  console.log(favCharactersIds);

  return (
    <>
      <h1>Favorites</h1>
    </>
  );
};

export { FavoritesPage };
