import { QueryClient, QueryClientProvider } from 'react-query';
import App, { AppProps } from './App';

const queryClient = new QueryClient();

function Root({ initialPath, recoilInit }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <App initialPath={initialPath} recoilInit={recoilInit} />
    </QueryClientProvider>
  );
}

export default Root;
