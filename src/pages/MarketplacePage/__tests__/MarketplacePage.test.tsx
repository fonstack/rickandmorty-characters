import { screen } from '@testing-library/react';
import { createFakeCharactersResponse } from '../../../api/characters/mockData';
import { Paths } from '../../../navigation';
import { renderApp } from '../../../tests';

describe('Marketplace page tests', () => {
  it('Should render the page properly', () => {
    renderApp(Paths.MARKETPLACE);

    const pageTitle = screen.getByTestId('page-title').textContent;
    expect(pageTitle).toBe('Explore');
  });

  it('Should render characters', async () => {
    const charactersResponse = createFakeCharactersResponse();

    renderApp(Paths.MARKETPLACE);

    expect((await screen.findByTestId('characters-count')).textContent).toBe(`${charactersResponse.pageInfo.count}`);
  });
});
