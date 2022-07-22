import { useRecoilState } from 'recoil';
import { favCharactersState } from './atoms';

type useFavUsersStateReturn = [number[], (characterId: number) => void, (characterId: number) => void];

export const useFavUsersState = (): useFavUsersStateReturn => {
  const [favCharacters, setFavCharactersIds] = useRecoilState(favCharactersState);

  const addFavCharacter = (characterId: number) => {
    setFavCharactersIds((prev) => [...prev, characterId]);
  };

  const removeFavCharacter = (characterId: number) => {
    setFavCharactersIds((prev) => prev.filter((id) => id !== characterId));
  };

  return [favCharacters, addFavCharacter, removeFavCharacter];
};
