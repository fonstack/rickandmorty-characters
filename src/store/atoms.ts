import { atom } from 'recoil';
import { FAV_CHARACTERS } from './constants';

export const favCharactersState = atom<number[]>({
  key: FAV_CHARACTERS,
  default: [1, 5, 45],
});
