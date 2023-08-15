//importar next images
import Image from "next/image"
//importar iconos
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

//importar imagenes
import perroImagen from '../public/img/newsletter/dog.png'

const NuevaLetra = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]">
        {/* input div */}
        <div className="bg-newsletterOrange bg-center bg-cover bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0 h-full">
          <h2 className="h2 mb-12">
            Suscribete <br /> y Recibe Noticias
          </h2>
          {/* input */}
          <div className="flex ">
            <input
              input="text"
              className="bg-transparent border-b-2 placeholder:text-white text-white outline-none  w-full pr-12"
              placeholder="E-mail"
            />
            <HiOutlineArrowNarrowRight className=" top-0 right-0 text-white text-3xl cursor-pointer" />
          </div>
        </div>
        {/* imagen div */}
        <div className="bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full">
          <Image src={perroImagen} width={300} height={300} alt="" />
        </div>
      </div>
    </section>
  );
}

export default NuevaLetra