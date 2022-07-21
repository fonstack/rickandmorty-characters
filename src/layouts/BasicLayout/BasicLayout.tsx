import { Outlet } from 'react-router-dom';
import { TopBar } from '../../componets';
import { AppLayout, PageContainer } from '../styles';

const BasicLayout = (): JSX.Element => {
  return (
    <AppLayout>
      <TopBar />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </AppLayout>
  );
};

export { BasicLayout };
