"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

export default function QuienesSomos() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuienesSomosContent />
    </Suspense>
  );
}

const QuienesSomosContent = () => {
  const searchParams = useSearchParams();
  const querySection = searchParams.get("section");

  useEffect(() => {
    const section = document.querySelector(`#${querySection}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [querySection]);
  return (
    <div>
      <div>
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-cyan-700 lg:pt-10 pb-10 wrapper mx-auto">
          ¿Quiénes somos?
        </h1>
        <div className="text-xl mx-auto pt-10 pb-10 text-center">
          <p className="wrapper mx-auto">
            Somos una asociación civil compuesta por voluntarios que aportan
            desde lo físico y económico a niños y adolescentes de bajo recurso a
            tener acceso a la educación informática a través de la programación
            y robótica asi son incluidos a las nuevas formas de aprendizaje.
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1">
            <Image
              alt="Imagen de portada"
              src={"/quienes-somos-1.jpeg"}
              width={"1200"}
              height={"800"}
              className="mt-10 mb-10"
            />
            <Image
              alt="Imagen de portada"
              src={"/quienes-somos-2.jpeg"}
              width={"1200"}
              height={"800"}
              className="mt-10 mb-10 hidden lg:block"
            />
          </div>

          <p className="wrapper mx-auto">
            Pequeños Genios se fundó en el año 2017 con el objetivo de capacitar
            a niños desde temprana edad, a través de diferentes métodos como la
            metodología STEAM, el objetivo es que aprendan a través del
            entretenimiento.
          </p>
          <br />
          <p className="wrapper mx-auto">
            Desde el año 2024 ampliamos nuestro establecimiento y nos formamos
            como fundación, con el objetivo de llegar a la mayor cantidad de
            niños de la provincia de Córdoba( tanto en ciudad como en interior).
          </p>
          <Image
            alt="Imagen de portada"
            src={"/quienes-somos-3.jpeg"}
            width={"1920"}
            height={"900"}
            className="mt-10 wrapper mx-auto rounded-xl"
          />
        </div>
      </div>
      <div className="pt-24 mx-auto wrapper" id="voluntariado">
        <h3 className="text-4xl text-cyan-700 font-semibold text-center">
          ¡Quiero ser voluntario!
        </h3>
        <p className="mt-14 text-xl">
          En Pequeños Genios recibimos distintos tipos de voluntarios, desde
          ayudar con el dictado de clases, organización interna y muchas otras
          actividades para realizar dentro de la fundación.
          <br />
          <br />
          Si quieres ayudar y ser participe del equipo{" "}
          <a
            className="text-cyan-700 hover-pg font-semibold"
            href="https://forms.gle/V5y9oeaAK7ywUeoH7"
          >
            postulate aqui!
          </a>
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-20">
          <a
            href="https://forms.gle/V5y9oeaAK7ywUeoH7"
            target="_blank"
            className="bg-cyan-700 text-center rounded-2xl text-xl p-5 flex flex-col items-center w-fit font-semibold text-white transition-all hover:bg-cyan-600 duration-300 shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="w-16 h-16 mb-3"
            >
              <g fill="currentColor">
                <path d="M19 25.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.5 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M10 15.25c0-.69.56-1.25 1.25-1.25h20.5a1.25 1.25 0 1 1 0 2.5h-20.5c-.69 0-1.25-.56-1.25-1.25m12.25 9.25a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5z" />
                <path d="M10.75 5A5.75 5.75 0 0 0 5 10.75v21.5A5.75 5.75 0 0 0 10.75 38h21.5A5.75 5.75 0 0 0 38 32.25v-21.5A5.75 5.75 0 0 0 32.25 5zM7.5 10.75a3.25 3.25 0 0 1 3.25-3.25h21.5a3.25 3.25 0 0 1 3.25 3.25v21.5c0 .456-.094.89-.264 1.285A3.242 3.242 0 0 1 32.25 35.5h-21.5a3.241 3.241 0 0 1-2.999-1.995A3.24 3.24 0 0 1 7.5 32.25z" />
                <path d="M15.25 42.5a5.744 5.744 0 0 1-4.747-2.504c.082.003.164.004.247.004h21.5A7.75 7.75 0 0 0 40 32.25v-21.5c0-.082-.002-.165-.004-.247A5.744 5.744 0 0 1 42.5 15.25v17c0 5.66-4.59 10.25-10.25 10.25z" />
              </g>
            </svg>
            Llenar formulario <br /> de voluntariado
          </a>
        </div>
      </div>
      <div className="pt-24 mx-auto wrapper" id="autoridades">
        <h3 className="text-4xl text-cyan-700 font-semibold text-center">
          Autoridades del equipo
        </h3>
        <ul className="mt-14 text-xl lg:grid lg:grid-cols-2  flex flex-col gap-3 ml-4">
          <li className="list-disc">
            <span className="text-cyan-700 font-semibold">Presidente : </span>
            Cr. Fernando Ariel Campos
          </li>
          <li className="list-disc">
            <span className="text-cyan-700 font-semibold">Tesorero : </span>Cr.
            Fernando Orlando Campos
          </li>
          <li className="list-disc">
            <span className="text-cyan-700 font-semibold">Secretaria : </span>
            Adriana Norma Giarratana
          </li>
          <li className="list-disc">
            <span className="text-cyan-700 font-semibold">
              Gerenta/Directora Académica :{" "}
            </span>
            Natalia Pinto
          </li>
        </ul>
      </div>
        <Image
          alt="Imagen de portada"
          src={"/equipo.jpeg"}
          width={"1920"}
          height={"800"}
            className="mt-20 wrapper mx-auto rounded-xl"
        />
      <div className="pt-16 mx-auto wrapper" id="mision">
        <h4 className="text-3xl text-cyan-700 font-semibold mt-8">Misión</h4>
        <p className="mt-10 text-xl">
          Capacitar a la mayor cantidad de niños con el propósito de sembrar
          conocimientos para un futuro mejor, superando barreras mediante la
          inclusión.
        </p>
        <h4 className="text-3xl text-cyan-700 font-semibold mt-8">Visión</h4>
        <p className="mt-10 text-xl">
          Ser una organización referente en el rubro informático por su
          trayectoria y prestigio en la educación.
        </p>
        <h4 className="text-3xl text-cyan-700 font-semibold mt-8">Valores</h4>
        <div className="mt-10 text-xl">
          <ul className="ml-4">
            <li className="list-disc mt-2">Igualdad de oportunidades.</li>
            <li className="list-disc mt-2">Ética y excelencia profesional.</li>
            <li className="list-disc mt-2">Compromiso social.</li>
            <li className="list-disc mt-2">Vocación de servicio.</li>
            <li className="list-disc mt-2">Innovación y creatividad.</li>
          </ul>
        </div>
      </div>
      <Image
          alt="Imagen de portada"
          src={"/nueva-1.jpeg"}
          width={"1920"}
          height={"800"}
            className="mt-20"
        />
    </div>
  );
};
