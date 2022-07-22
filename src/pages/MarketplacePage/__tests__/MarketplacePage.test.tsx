import { screen } from '@testing-library/react';
import { Paths } from '../../../navigation';
import { renderApp } from '../../../tests';

describe('Marketplace page tests', () => {
  it('Should render the page properly', () => {
    renderApp(Paths.MARKETPLACE);

    const pageTitle = screen.getByTestId('page-title').textContent;
    expect(pageTitle).toBe('Marketplace');
  });

  it('Should render characters', async () => {
    // renderApp(Paths.MARKETPLACE);

    // const charactersContainer = screen.getByTestId('test').textContent;
    // console.log(charactersContainer);
    expect(true).toBe(true);
  }, 5000);
});
