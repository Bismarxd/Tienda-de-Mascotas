//Importar Imagen
import Image from "next/image"
import tituloImagen from '../public/img/hero/pretitulo.svg'

//Componentes
import Header from "./Header";

const Hero = () => {
  return (
    <section className="bg-cream lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]">
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:min-h-[805px]">
        <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0">
          {/* imagen */}
          {/* <div className="hidden xl:flex mb-6 ml-5">
            <h2 className="font-bold text-sky-600 text-3xl">
              Productos Seleccionados
            </h2>
          </div> */}
          <h1 className="text-primary text-5xl lg:text-8xl uppercase font-bold -tracking-[0.05rem] mb-10">
            Por el
            <br />
            <span className="text-sky-900 font-normal">Bienestar de</span>
            <br />
            tu Mascota
          </h1>
          <button className="btn bg-sky-950 hover:bg-sky-500 mx-auto lg:mx-0 text-white">
            Ver Más
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero