import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter, routes } from '../navigation';
import { StyledApp } from './styles';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <StyledApp>
          <AppRouter routes={routes} />
        </StyledApp>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
