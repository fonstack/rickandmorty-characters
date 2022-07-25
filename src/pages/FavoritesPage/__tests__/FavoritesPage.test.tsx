import { screen } from '@testing-library/react';
import { createFakeFavCharacterResponse } from '../../../api/characters/mockData';
import { Paths } from '../../../navigation';
import { favCharactersState } from '../../../store';
import { renderApp } from '../../../tests';

describe('Favorites page tests', () => {
  it('Should render the page properly', () => {
    renderApp(Paths.FAVORITES);

    const pageTitle = screen.getByTestId('page-title').textContent;
    expect(pageTitle).toBe('Favorites');
  });

  it('Should render fav characters', async () => {
    const favCharactersResponse = createFakeFavCharacterResponse();
    const favCharactersIds = favCharactersResponse.map((character) => +character.id);

    renderApp(Paths.FAVORITES, (snap) => snap.set(favCharactersState, favCharactersIds));

    expect(await (await screen.findByTestId('characters-count')).textContent).toBe(`${favCharactersIds.length}`);
  });
});
