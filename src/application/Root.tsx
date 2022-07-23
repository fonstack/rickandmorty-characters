import { QueryClient, QueryClientProvider } from 'react-query';
import App, { AppProps } from './App';
import { GlobalStyle } from '../styles';

const queryClient = new QueryClient();

function Root({ initialPath, recoilInit }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App initialPath={initialPath} recoilInit={recoilInit} />
    </QueryClientProvider>
  );
}

export default Root;
