import React from 'react';
import GoToHome from '@/components/nav/goToHome';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GoToHome />
      <main className={'p-24 flex flex-col items-center gap-2 min-h-full'}>
        <h1 className={'text-2xl font-extrabold'}>Traffic Lights</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
