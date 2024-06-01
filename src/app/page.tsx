import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className={'text-4xl'}>All the Mini Apps</h1>
      <section className={'grid grid-cols-4 mt-16 flex-1 gap-x-6 items-center'}>
        <Link
          className={'border p-4 rounded cursor-pointer'}
          href={'/traffic-light'}
        >
          <span>Traffic Light App</span>
        </Link>
      </section>
      <p className={'text-lg'}>More Coming soon... 😉</p>
    </main>
  );
}
