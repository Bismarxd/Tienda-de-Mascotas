//Imagen
import Image from "next/image";
//logo
import Logo from "../public/img/header/logo.svg";

const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center">
        {/* logo */}
        <a href="#">
          <h3 className="font-primary font-extrabold">Tienda-Mascotas</h3>
        </a>
        {/* Navegacion */}
        <nav className="text-xl flex gap-x-4 lg:gap-x-12 z-10">
          <a href="#">Servicios</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </nav>
        {/* boton */}
        <button className="btn bg-violet-950 hover:bg-violet-650 lg:btn-outline text-white">
          Iniciar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
