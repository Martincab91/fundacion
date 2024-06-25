"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ActiveLink } from "./ActiveLink";

const links = [
  {
    href: "/",
    label: "Inicio",
    options: [
      { nombre: "Inicio", query: "/" },
      { nombre: "Nuestra fundación", query: "/?section=nuestraFundacion" },
      { nombre: "Cómo puedo ayudar", query: "/?section=comoPuedoAyudar" },
      { nombre: "Cursos/Talleres", query: "/?section=capacitaciones" },
      { nombre: "Empresas que nos acompañan", query: "/?section=empresas"}
    ],
  },
  { href: "/noticias", label: "Noticias", options: null },
  {
    href: "/quienessomos",
    label: "¿Quiénes somos?",
    options: [
      { nombre: "Quiénes somos", query: "/quienessomos" },
      {
        nombre: "Quiero ser voluntario",
        query: "/quienessomos?section=voluntariado",
      },
      { nombre: "Autoridades", query: "/quienessomos?section=autoridades" },
      {
        nombre: "Misión, Visión y Valores",
        query: "/quienessomos?section=mision",
      },
    ],
  },
  { href: "/donaciones", label: "Donaciones", options: null },
  { href: "/contacto", label: "Contacto", options: null },
];

const HeadBar = () => {
  const [navAtTop, setNavAtTop] = useState([
    "pb-4",
    150,
    "mt-4",
    "xl:text-xl text-lg",
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (open === true && typeof window !== "undefined") {
        const classList = e.target.classList;
        if (classList.contains("cerrarmenu")) {
          console.log('deberia cerrarse');
          handleMenu();
        }
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [open]);

  const handleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        setNavAtTop(["pb-3", 110, "mt-3", "xl:text-lg text-base"]);
      } else {
        setNavAtTop(["pb-4", 150, "mt-4", "xl:text-xl text-lg"]);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${navAtTop[0]} bg-cyan-700 w-full fixed transition-all duration-700 shadow-2xl z-20`}
    >
      <div className=" flex flex-row wrapper mx-auto justify-between pl-6 pr-6 transition-all duration-700">
        <Link href="/" className="logo-width lg:block hidden">
          <Image
            alt="logo"
            src={"/logo.png"}
            width={navAtTop[1]}
            height={100}
            className="rounded-bl-3xl rounded-br-3xl cursor-pointer shadow-2xl transition-all duration-700 "
          />
        </Link>
        <div className=" w-full flex flex-col justify-center mx-auto">
          <div className="lg:hidden grid grid-cols-3 items-end">
            <div></div>
            <Image
              alt="logo"
              src={"/logo.png"}
              width={100}
              height={100}
              className="rounded-bl-3xl rounded-br-3xl cursor-pointer shadow-2xl transition-all duration-700 mx-auto"
            />
            <button
              onClick={handleMenu}
              className="focus:outline-none flex flex-row justify-end items-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M2 6h20v2H2zm0 5h20v2H2zm0 5h20v2H2z"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${navAtTop[2]} ${
              open ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row text-white xl:gap-7 justify-center
          gap-4 items-center ${
            navAtTop[3]
          } font-semibold transition-all duration-700`}
          >
            {links.map((link) => (
              <ActiveLink
                key={link.href}
                path={link.href}
                text={link.label}
                options={link.options}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeadBar;
