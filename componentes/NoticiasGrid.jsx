import noticias from "@/data/noticias";
import Link from "next/link";

export const NoticiasGrid = () => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-center gap-8 mt-10">
      {noticias.map((noticia, index) => (
        <div
          key={index}
          className="flex flex-col justify-center lg:w-[350px] w-[300px] shadow-lg rounded-xl"
        >
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full h-auto rounded-se-xl rounded-ss-xl max-h-56"
          />
          <h2 className="text-lg font-bold m-3 text-cyan-700 text-ellipsis line-clamp-3">
            {noticia.titulo}
          </h2>
          <p className="m-3 text-md line-clamp-3">{noticia.descripcion}</p>
          <div className="w-full flex flex-col items-end">
            <Link
              href={`/noticias/${noticia.id}`}
              className="m-3 text-cyan-700 font-semibold cursor-pointer w-fit"
            >
              Leer más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
