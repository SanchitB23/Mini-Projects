import React from 'react';
import PageLayoutWBackBtn from '@/components/layouts/PageLayoutWBackBtn';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <PageLayoutWBackBtn title={'Traffic Lights'}>{children}</PageLayoutWBackBtn>
  );
};

export default Layout;
