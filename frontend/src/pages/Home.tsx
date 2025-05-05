import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function Home() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full bg-white/90 backdrop-blur-md shadow fixed top-0 left-0 z-50 transition-all duration-500 ${
          showNavbar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo e nome */}
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/293/293241.png"
              alt="Logo Costura"
              className="w-10 h-10"
            />
            <span className="text-2xl font-extrabold tracking-tight text-pink-800 font-serif">
              RF Atelier
            </span>
          </div>
          {/* Links */}
          <div className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-pink-700 font-medium hover:text-amber-500 transition"
            >
              Início
            </a>
            <a
              href="#"
              className="text-pink-700 font-medium hover:text-amber-500 transition"
            >
              Produtos
            </a>
            <a
              href="#"
              className="text-pink-700 font-medium hover:text-amber-500 transition"
            >
              Cursos
            </a>
            <a
              href="#"
              className="text-pink-700 font-medium hover:text-amber-500 transition"
            >
              Contato
            </a>
          </div>
          {/* Botão de ação */}
          <Button className="hidden md:inline-block bg-amber-400 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-amber-300 transition">
            Minha Sacola
          </Button>
          {/* Menu mobile */}
          <div className="md:hidden">
            <Button variant="outline" size="icon">
              <span className="material-icons">menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO/HEAD */}
      <header className="relative flex items-center justify-center min-h-[80vh] bg-pink-50 pt-24">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch">
          {/* Texto à esquerda */}
          <div className="absolute md:static left-8 top-1/2 md:top-auto md:left-auto md:w-1/2 z-10 flex flex-col justify-center h-full">
            <h1 className="text-pink-800 font-serif text-4xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-lg">
              Costure
              <br />
              Seu Próprio Estilo
            </h1>
            <Button
              variant="outline"
              className="border-pink-800 text-pink-800 font-bold px-8 py-3 rounded-none hover:bg-pink-100 transition w-fit"
            >
              Conheça nossa história
            </Button>
          </div>
          {/* Imagem central */}
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
            alt="Costura"
            className="w-full md:w-3/4 mx-auto rounded-none shadow-2xl object-cover aspect-video"
            style={{ minHeight: 400, maxHeight: 500 }}
          />
        </div>
      </header>
    </>
  );
}

export default Home;
