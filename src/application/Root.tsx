import { QueryClient, QueryClientProvider } from 'react-query';
import { Paths } from '../navigation';
import App from './App';

const queryClient = new QueryClient();

interface RootProps {
  initialPath?: Paths;
}

function Root({ initialPath }: RootProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <App initialPath={initialPath} />
    </QueryClientProvider>
  );
}

export default Root;
