"use client";
import noticias from "@/data/noticias";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Noticia() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const noticia = noticias.find((noticia) => noticia.id == id);

  console.log(noticia);

  return (
    <div className="wrapper mx-auto">
      <h1 className="w-full mx-auto lg:text-4xl text-2xl font-semibold text-cyan-700 lg:my-10 my-0">
        {noticia.titulo}
      </h1>
      <h2 className="text-xl w-full mt-10 lg:mt-0 mx-auto font-medium">
        {noticia.descripcion}
      </h2>
      <img
        src={noticia.imagen}
        alt="imagen de la noticia"
        className="w-full lg:w-3/4 mx-auto rounded-xl shadow-xl my-10"
      />
      {noticia.texto.map((parrafo, index) => (
        <>
          <p className="w-full mx-auto text-xl" key={index}>
            {parrafo}
          </p>
          <br />
        </>
      ))}

      <div className="w-full mx-auto flex flex-row justify-between">
        <Link
          className="text-cyan-700 font-semibold w-fit text-xl hover-pg"
          href="/noticias"
        >
          Volver
        </Link>
        {noticia.fuente ? (
          <a
            href={noticia.fuente}
            target="_blank"
            className="text-cyan-700 font-semibold w-fit text-xl hover-pg"
          >
            Fuente de la noticia
          </a>
        ) : null}
      </div>
    </div>
  );
}
