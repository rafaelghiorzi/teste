import TelaDeLogin from "./components/teladelogin";

export default function Home() {
  return (
    <main className="text-black bg-gray-200 flex">
      <TelaDeLogin link="https://instagram.com" />
      <TelaDeLogin link="https://youtube.com" />
    </main>
  );
}

// xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl 9xl 10xl
// thin normal medium semibold bold extrabold black
