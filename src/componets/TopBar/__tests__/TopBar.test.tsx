import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TopBar } from '../TopBar';

describe('TopBar tests', () => {
  it('Should render TopBar correctly', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );

    expect(screen.getByTestId('topbar')).toBeInTheDocument();
  });
});
