import React from 'react';
import GoToHome from '@/components/nav/goToHome';
import classNames from 'classnames';

const PageLayoutWBackBtn = ({
  children,
  title,
  className,
  titleClasses,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  className?: string;
  titleClasses?: string;
}>) => {
  return (
    <>
      <GoToHome />
      <main
        className={classNames(
          'p-24 flex flex-col items-center gap-2 min-h-full',
          className,
        )}
      >
        <h1 className={classNames('text-2xl font-extrabold', titleClasses)}>
          {title}
        </h1>
        {children}
      </main>
    </>
  );
};

export default PageLayoutWBackBtn;
