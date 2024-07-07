import React from 'react';
import PageLayoutWBackBtn from '@/components/layouts/PageLayoutWBackBtn';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <PageLayoutWBackBtn title={'Tic Tac Toe Game'} className={'min-h-screen'}>
      {children}
    </PageLayoutWBackBtn>
  );
};

export default Layout;
