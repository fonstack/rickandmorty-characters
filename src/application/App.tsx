import { MutableSnapshot, RecoilRoot } from 'recoil';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AppRouter, Paths, routes } from '../navigation';

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
        <AppRouter routes={routes} />
      </CustomRouter>
    </RecoilRoot>
  );
}

export default App;
