import { MutableSnapshot, RecoilRoot } from 'recoil';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AppRouter, Paths, routes } from '../navigation';
import { StyledApp } from './styles';

export interface AppProps {
  initialPath?: Paths;
  recoilInit?: (mutableSnapshot: MutableSnapshot) => void;
}

const CustomRouter = ({ children, initialPath }: AppProps & { children: JSX.Element }) => {
  if (initialPath) {
    return <MemoryRouter initialEntries={[initialPath]}>{children}</MemoryRouter>;
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

function App({ initialPath, recoilInit }: AppProps) {
  return (
    <RecoilRoot initializeState={recoilInit}>
      <CustomRouter initialPath={initialPath}>
        <StyledApp>
          <AppRouter routes={routes} />
        </StyledApp>
      </CustomRouter>
    </RecoilRoot>
  );
}

export default App;
