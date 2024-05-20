"use client";

import { useState } from "react";
import CardProfessor from "./components/cardProfessor";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <main className="bg-gray-200 h-screen">
      <header className="bg-black mb-20 h-10"></header>
      <CardProfessor
        nome="Professora Alba"
        curso="Sistemas Operacionais"
        imgSrc="/lagartixa.png"
      />
    </main>
  );
}

// xs sm md lg xl 2xl 3xl 4xl 5xl 6xl 7xl 8xl 9xl 10xl
// thin normal medium semibold bold extrabold black
