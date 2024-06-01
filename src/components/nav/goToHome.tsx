import React from 'react';
import Link from 'next/link';

const GoToHome = () => {
  return (
    <nav className={'max-w-screen pt-8 pl-4'}>
      <Link href={'/'}>
        <button>⟵ Go to Homepage</button>
      </Link>
    </nav>
  );
};

export default GoToHome;
