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

    const totalCharactersCount = charactersResponse.pageInfo.count.toString();
    const renderedCharactersCount = charactersResponse.characters.length;

    expect((await screen.findByTestId('characters-count')).textContent).toBe(totalCharactersCount);
    expect((await screen.findByTestId('characters')).childNodes.length).toBe(renderedCharactersCount);
  });
});
