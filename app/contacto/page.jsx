export default function Contacto() {
  return (
    <div className="flex flex-col-reverse lg:flex lg:flex-row gap-y-8 lg:mt-36 wrapper mx-auto mb-20 lg:mb-0">
      <div className="lg:w-full lg:pr-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13617.766642595949!2d-64.2275516!3d-31.4295059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a35b39e5ba73%3A0xa7869611e5153e8a!2sPeque%C3%B1os%20Genios!5e0!3m2!1ses-419!2sar!4v1706222909960!5m2!1ses-419!2sar"
          width="600"
          height="450"
          className=" mx-auto w-full rounded-xl shadow-xl lg:h-[600px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col justify-between lg:h-[550px] h-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-cyan-700 ">
          Contacto
        </h1>
        <ul className=" mt-10 flex flex-col justify-evenly h-auto lg:h-96">
          <li className="flex flex-row items-center text-xl mt-5 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="#0e7490"
                d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
              />
              <path
                fill="#0e7490"
                d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395"
              />
            </svg>{" "}
            Felipe Boero 1753, Córdoba, Argentina{" "}
          </li>
          <li className="flex flex-row items-center text-xl mt-5 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="#0e7490"
                d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"
              />
            </svg>
            +54 9 351 761 5352
          </li>
          <li className="flex flex-row items-center text-xl mt-5 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0e7490"
                d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM6.5 14.25a3.75 3.75 0 0 1 3.75-3.75h27.5a3.75 3.75 0 0 1 3.75 3.75v.89l-17.498 9.21L6.5 15.063zm0 3.644l16.914 8.974a1.25 1.25 0 0 0 1.168.002L41.5 17.965V33.75a3.75 3.75 0 0 1-3.75 3.75h-27.5a3.75 3.75 0 0 1-3.75-3.75z"
              />
            </svg>
            info@pequeñosgenioscba.com
          </li>
        </ul>
        <div className="flex flex-row flex-wrap mt-10 lg:justify-evenly justify-evenly sm:justify-start gap-10">
          <a
            href="https://www.instagram.com/pequenosgenios.cba/?hl=es"
            className="w-14 h-14 p-0.5 bg-cyan-700 rounded-2xl flex justify-center items-center"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="w-20 h-20"
            >
              <path
                fill="white"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/543517615352"
            className="w-14 h-14 p-1 bg-cyan-700 rounded-xl flex justify-center items-center"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="w-20 h-20 translate-x-0.5 -translate-y-0.5"
            >
              <path
                fill="white"
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
