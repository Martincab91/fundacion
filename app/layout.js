import { Montserrat } from "next/font/google";
import "./globals.css";
import HeadBar from "@/componentes/HeadBar";
import Footer from "@/componentes/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Fundacion pequeños genios",
  description: "Fundacion que educa a niños en programacion, robotica, desarrollo de videojuegos y mas. Actualmente recibimos donaciones para poder seguir con nuestra labor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={font.className}>
        <HeadBar />
        <div className="block w-full bg-cyan-700 lg:h-24 absolute">
        </div>
        <div className="pt-24 mx-auto min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
