import { renderHook } from '@testing-library/react-hooks';
import { TestQueryClientProvider } from '../../../tests';
import { useInfiniteCharacters } from '../hooks';
import { charactersTransform, characterTransform } from '../selectors';
import {
  createFakeCharacter,
  createFakeCharacterResponse,
  createFakeCharacters,
  createFakeCharactersResponse,
} from './../mockData';

describe('Characters api tests', () => {
  const wrapper = TestQueryClientProvider;

  it('Character select should transform data properly', () => {
    const fakeCharacterResponse = createFakeCharacterResponse();
    const fakeCharacter = createFakeCharacter();

    expect(characterTransform(fakeCharacterResponse)).toEqual(fakeCharacter);
  });

  it('Characters select should transform data properly', () => {
    const fakeCharactersResponse = createFakeCharactersResponse();
    const fakeCharacters = createFakeCharacters();

    expect(charactersTransform(fakeCharactersResponse)).toEqual(fakeCharacters);
  });

  it('Should get characters correctly', async () => {
    const { result, waitFor, rerender } = renderHook(() => useInfiniteCharacters(), { wrapper });

    await waitFor(() => !result.current.isFetching);
    rerender();

    console.log(result.current.data?.pages[0].characters);

    expect(result.current.data).toMatchSnapshot();
  });
});
