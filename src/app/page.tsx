import Link from 'next/link';
import { HOME_CARDS_DATA } from '@/constants';

export default function Home() {
  const childCount = HOME_CARDS_DATA.length;
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className={'text-4xl'}>All the Mini Apps</h1>
      <section
        className={`grid grid-cols-${Math.min(Math.round(childCount / 2), 4)} mt-16 flex-1 gap-x-14 items-center justify-items-center content-evenly w-full`}
      >
        {HOME_CARDS_DATA.map((value) => (
          <Link
            className={
              'border px-20 py-6 rounded cursor-pointer w-full text-center max-w-2xl'
            }
            href={`/${value.url}`}
            key={value.url}
          >
            <span>{value.title}</span>
          </Link>
        ))}
      </section>
      <p className={'text-lg'}>More Coming soon... 😉</p>
    </main>
  );
}
