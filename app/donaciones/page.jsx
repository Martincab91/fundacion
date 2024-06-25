import Image from "next/image";

export default function Donaciones() {
  return (
    <div className="wrapper mx-auto">
      <h1 className="text-4xl lg:text-5xl text-center font-bold text-cyan-700 lg:pt-20 pb-16">
        Donaciones y Colectas
      </h1>
      <div className="lg:flex lg:flex-row lg:gap-10">
        <Image
          alt="Imagen de portada"
          src={"/donar.jpeg"}
          width={2048}
          height={707}
          className="rounded-xl shadow-xl w-full lg:w-7/12"
        />
        <div className="flex flex-col items-center justify-center gap-20">
          <p className="text-xl text-center pt-20 lg:pt-0">
            Muchos niños en situación de vulnerabilidad y con bajos recursos
            necesitan tu ayuda para acceder a la educación informática. Es
            crucial que desde temprana edad adquieran nuevos conocimientos en
            programación.
          </p>
          <a
            href="https://donaronline.org/fundacion-pequenos-genios/ayudanos-a-que-cada-vez-sean-mas-los-pequenos-genios"
            target="_blank"
            className="bg-cyan-700 rounded-2xl text-xl p-5 flex flex-col items-center w-fit mx-auto font-semibold text-white transition-all hover:bg-cyan-600 duration-300 shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="w-14 h-14"
            >
              <g
                fill="none"
                stroke="white"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M16 6.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.281 2.281 0 0 1 0-3.214a2.277 2.277 0 0 1 3.232 0L12 4.78l.106-.107A2.276 2.276 0 0 1 16 6.28Z" />
                <path
                  strokeLinecap="round"
                  d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"
                />
                <path
                  strokeLinecap="round"
                  d="m18 16l.858-.858a.484.484 0 0 0 .142-.343v0a.485.485 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"
                />
                <path
                  strokeLinecap="round"
                  d="m6 16l-.858-.858A.485.485 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20"
                />
              </g>
            </svg>
            Donar ahora
          </a>
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

      <div className="pt-24" id="nuestraFundacion">
        <h3 className="text-4xl text-cyan-700 font-semibold">Colecta</h3>
        <p className="mt-10 text-xl">
          Recibimos equipamiento tecnológico (notebooks, tablets, mouse, etc.) e
          insumos informáticos.
          <br />
          <br />
          Estamos disponibles de{" "}
          <b className="text-cyan-700">
            Lunes a Viernes de 9:00 a 12:00 hrs o 17hs a 21hs
          </b>{" "}
          en nuestro espacio en{" "}
          <b className="text-cyan-700">
            Felipe Boero 1753 , Barrio los Naranjos
          </b>
          .
          <br />
          <br />
          ¡¡MUCHAS GRACIAS!!
        </p>
        <div className="grid grid-cols-1 gap-x-8">
          <Image
            alt="Imagen de portada"
            src={"/donar-1.jpeg"}
            width={"1200"}
            height={"800"}
            className="rounded-xl shadow-xl mt-10"
          />
          {/* <Image
            alt="Imagen de portada"
            src={"/donar-2.jpeg"}
            width={"1200"}
            height={"800"}
            className="rounded-xl shadow-xl mt-10"
          /> */}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.766642595949!2d-64.2275516!3d-31.4295059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a35b39e5ba73%3A0xa7869611e5153e8a!2sPeque%C3%B1os%20Genios!5e0!3m2!1ses-419!2sar!4v1706222909960!5m2!1ses-419!2sar"
          width="600"
          height="450"
          className="mt-10 mb-10 mx-auto w-full rounded-xl shadow-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
