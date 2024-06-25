import Image from "next/image";
import Link from "next/link";

const ayudas = [
  {
    nombre: "Ser voluntario",
    descripcion:
      "Podes ser parte de nuestro hermoso equipo para realizar diversas tareas dentro de la fundación.",
    enlace: "/quienessomos?section=voluntariado",
    imagen: "help",
  },
  {
    nombre: "Donar",
    descripcion:
      "Podes realizar tu aporte a través de una donación ya que nos ayuda a llegar a capacitar más niños.",
    enlace: "/donaciones",
    imagen: "donate",
  },
  {
    nombre: "Colecta",
    descripcion:
      "Recibimos equipamiento tecnológico (notebooks, tablets, mouse, etc.) e insumos informáticos.",
    enlace: "/donaciones",
    imagen: "gift",
  },
];

export const AyudasGrid = () => {
  return (
    <>
      <div className="mt-10 mb-10 wrapper flex flex-row justify-center lg:justify-between lg:gap-0 lg:gap-y-20 lg: gap-10 mx-auto flex-wrap ">
        {ayudas.map((ayuda, index) => (
          <div
            key={index}
            className="transition-all hover:bg-cyan-600 duration-300 w-80 flex flex-col gap-6 items-center justify-between bg-cyan-700 rounded-xl shadow-2xl px-5 py-9 "
          >
            <Image
              alt={ayuda.imagen}
              src={`/${ayuda.imagen}.svg`}
              width={100}
              height={100}
            />
            <h3 className="text-2xl text-center text-white font-semibold">
              {ayuda.nombre}
            </h3>
            <p className=" text-white text-lg text-center">
              {ayuda.descripcion}
            </p>
            <Link
              href={ayuda.enlace}
              className="bg-white p-3 rounded-lg text-cyan-700 font-semibold hover-pg"
            >
              Más información
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
