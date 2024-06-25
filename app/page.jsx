"use client";

import { AyudasGrid } from "@/componentes/AyudasGrid";
import { CapacitacionesGrid } from "@/componentes/CapacitacionesGrid";
import Carrousel from "@/componentes/Carrousel";
import YoutubeGrid from "@/componentes/YoutubeGrid";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}

const HomePageContent = () => {
  const searchParams = useSearchParams();
  const querySection = searchParams ? searchParams.get("section") : null;

  useEffect(() => {
    const section = document.querySelector(`#${querySection}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [querySection]);
  return (
    <>
      <div className="wrapper mx-auto absolute absolute-center z-10">
        <h1 className="text-4xl lg:text-7xl text-center font-bold cyan lg:pt-20 pb-10">
          ¡Bienvenidos a la Fundación Pequeños Genios!
        </h1>
        <h2 className="lg:text-2xl text-lg mx-auto pt-10 pb-10 text-center blanco">
          Somos Pequeños Genios y te invitamos a que conozcas un poco más sobre
          cuál es nuestro rol en el ámbito de la educación informática y
          tecnológica.
        </h2>
        <Link
          className="bg-cyan-700 hover-pg rounded-2xl text-xl p-5 mt-10 mb-10 flex w-fit mx-auto font-semibold text-white transition-colors duration-300 shadow-xl"
          href="/quienessomos"
        >
          Conocer más
        </Link>
      </div>
      <Carrousel />

      <div className="pt-24 wrapper mx-auto" id="nuestraFundacion">
        <h3 className="text-4xl text-cyan-700 font-semibold">
          Nuestra Fundación
        </h3>
        <p className="mt-10 text-xl">
          Contamos con una sucursal para recibir a diferentes niños/adolescentes
          para que puedan tener acceso a capacitaciones ligadas a la robótica y
          programación.
          <br />
          <br />
          Disponemos de aulas equipadas para que los alumnos puedan trabajar de
          la mejor manera!!
        </p>
        <YoutubeGrid />
      </div>

      <div className="pt-24 wrapper mx-auto" id="comoPuedoAyudar">
        <h3 className="text-4xl text-cyan-700 font-semibold">
          ¿Cómo puedo ayudar?
        </h3>
        <AyudasGrid />
      </div>
      <Image
        alt="Imagen de portada"
        src={"/banner.jpeg"}
        width={"1920"}
        height={"100"}
        className=" mt-14 block w-full"
      />

      <div className="pt-24 wrapper mx-auto" id="capacitaciones">
        <h3 className="text-4xl text-cyan-700 font-semibold">
          Cursos/Talleres
        </h3>
        <p className="mt-10 text-xl">
          Nuestros cursos son reconocidos y avalados por la Universidad Nacional
          de Córdoba y por el Campus Norte U.N.C.
        </p>
        <CapacitacionesGrid />
      </div>
      <div className="pt-24 wrapper mx-auto" id="empresas">
        <h3 className="text-4xl text-cyan-700 font-semibold">
          Empresas que nos acompañan
        </h3>
        <div className="flex md:w-full w-fit flex-wrap rounded-xl justify-between mt-10 bg-cyan-700 p-10 gap-3">
          <img className="lg:h-28 md:h-20 h-16 rounded-lg" src="/convenpack.jpeg"></img>
          <img className="lg:h-28 md:h-20 h-16 rounded-lg" src="/Colegio-universitario.jpeg"></img>
          <img className="lg:h-28 md:h-20 h-16 rounded-lg" src="/campus-norte.jpeg"></img>
          <img className="lg:h-28 md:h-20 h-16 rounded-lg" src="/ministerio-educacion.jpeg"></img>
        </div>
      </div>
      <Image alt="Imagen de portada" src={"/nueva-2.jpeg"} width={"1920"} height={"100"} className="mt-28 block w-full" />
    </>
  );
};
