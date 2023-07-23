import { Cards } from './Cards';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-10">
      <h1 className="mt-10 text-2xl">Cards</h1>

      <Cards />
    </main>
  );
}
