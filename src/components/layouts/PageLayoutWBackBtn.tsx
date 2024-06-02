import React from 'react';
import GoToHome from '@/components/nav/goToHome';

const PageLayoutWBackBtn = ({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) => {
  return (
    <>
      <GoToHome />
      <main className={'p-24 flex flex-col items-center gap-2 min-h-full'}>
        <h1 className={'text-2xl font-extrabold'}>{title}</h1>
        <div>{children}</div>
      </main>
    </>
  );
};

export default PageLayoutWBackBtn;
