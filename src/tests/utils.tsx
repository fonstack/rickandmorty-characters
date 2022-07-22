import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { Root } from '../application';
import { Paths } from '../navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MutableSnapshot } from 'recoil';

type TestQueryClientProviderProps = PropsWithChildren<unknown> & {
  queryClient?: QueryClient;
};

export const renderApp = (path: Paths, recoilInit?: (mutableSnapshot: MutableSnapshot) => void) => {
  render(
    <React.StrictMode>
      <Root initialPath={path} recoilInit={recoilInit} />
    </React.StrictMode>
  );
};

export const TestQueryClientProvider = ({
  children,
  queryClient = new QueryClient(),
}: TestQueryClientProviderProps): JSX.Element => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
