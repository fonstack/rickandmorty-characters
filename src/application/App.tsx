import { RecoilRoot } from 'recoil';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AppRouter, Paths, routes } from '../navigation';
import { StyledApp } from './styles';

interface AppProps {
  initialPath?: Paths;
}

const Router = ({ children, initialPath }: AppProps & { children: JSX.Element }) => {
  if (initialPath) {
    return <MemoryRouter initialEntries={[initialPath]}>{children}</MemoryRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

function App({ initialPath }: AppProps) {
  return (
    <RecoilRoot>
      <Router initialPath={initialPath}>
        <StyledApp>
          <AppRouter routes={routes} />
        </StyledApp>
      </Router>
    </RecoilRoot>
  );
}

export default App;
