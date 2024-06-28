import { NoticiasGrid } from "@/componentes/NoticiasGrid";

export default function Noticias() {
  return (
    <div className="wrapper mx-auto mb-20 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl text-center font-bold text-cyan-700 lg:pt-20 pb-10">
          Noticias
        </h1>

      <NoticiasGrid />

    </div>
  );
}
