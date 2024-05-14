export default function Home() {
  return (
    <main className="text-black bg-gray-200 flex">
      <img src="/fundo.png" alt="foto_de_fundo" className="w-1/2 h-screen" />
      <section className="flex-col justify-center w-1/2 items-center flex p-32">
        <h1 className="mb-20 text-3xl font-semibold">
          Avaliação de professores
        </h1>
        <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="nome" />
        <input className="p-2 m-3 rounded-lg w-full" type="text" placeholder="senha" />
        <div className="flex flex-row">
          <button className="p-2 m-3 bg-green-300 rounded-lg">entrar</button>
          <button className="p-2 m-3 bg-green-300 rounded-lg">Criar conta</button>
        </div>
      </section>
    </main>
  );
}

// xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl 9xl 10xl
// thin normal medium semibold bold extrabold black
