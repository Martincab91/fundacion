"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export const ActiveLink = ({ path, text, options, arrowSize = "32" }) => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const linkRef = useRef(null);

  const handleOnClick = (event) => {
    if (options) {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event) => {
    if (linkRef.current && !linkRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={linkRef} className="min-w-max">
      <Link
        onClick={handleOnClick}
        href={path}
        className={`flex text-center flex-row items-center justify-center mx-auto hover-pg ${options ? '' : 'cerrarmenu'} ${
          currentPath === path ? "text-golden-pg" : ""
        }`}
      >
        {text}
        {options ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={arrowSize}
            height={arrowSize}
            viewBox={`0 0 ${arrowSize} ${arrowSize}`}
            className="w-6" 
          >
            <path
              fill="currentColor"
              d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"
            />
          </svg>
        ) : null}
      </Link>

      {options ? (
        <>
          <div
            className={`text-base ${
              isOpen ? "lg:absolute block" : "hidden"
            } rounded-md bg-cyan-700`}
          >
            {options.map((option) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={option.nombre}
                href={option.query}
                className={`cerrarmenu flex flex-row hover-pg bg-cyan-700 rounded-md p-3 lg:justify-start justify-center`}
              >
                {option.nombre}
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};
