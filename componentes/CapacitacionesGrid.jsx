const capacitaciones = [
  { nombre: "Programación con robótica", imagen: "/robotica.jpeg" },
  { nombre: "Programación de videjuegos", imagen: "/videojuegos.jpeg" },
];

export const CapacitacionesGrid = () => {
  return (
    <>
      <div className="mt-10 mb-10 wrapper flex flex-row justify-center gap-10 lg:gap-y-20 mx-auto flex-wrap">
        {capacitaciones.map((capacitacion, index) => (
          <div
            key={index}
            className="w-80 flex flex-col gap-6 items-center justify-center rounded-xl shadow-2xl px-5 py-9 min-h-96 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0.4)), url(${capacitacion.imagen})`,
              backgroundSize: 'cover',
            }}
          >
            <h3 className="text-2xl text-center text-white font-bold relative z-10">
              {capacitacion.nombre}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

