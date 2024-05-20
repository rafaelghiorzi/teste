import Image from "next/image";

interface cardProfessorProps {
  nome: string;
  curso: string;
  imgSrc: string;
}

const CardProfessor: React.FC<cardProfessorProps> = ({
  nome,
  curso,
  imgSrc,
}) => {
  return (
    <article className="flex flex-col m-5 items-center bg-gray-400 w-fit p-5 rounded-xl">
      <Image
        src={imgSrc}
        alt={"profile picture"}
        height={200}
        width={200}
        className="rounded-lg"
      ></Image>
      <h1 className="text-xl font-medium mt-2 mb-2">{nome}</h1>
      <h2 className="text-black/70">{curso}</h2>
    </article>
  );
};

export default CardProfessor;
