//Importar Next Images
import Image from "next/image"

//importar imagenes
import imagen1 from '../public/img/adoption/img1.png'

const Adopcion = () => {
  return (
    <section className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        {/* imagen */}
        <div className="flex-1 mb-6 lg:mb-0">
          <Image src={imagen1} width={542} height={560} alt="" />
        </div>
        {/* texto */}
        <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2 mb-6">
            Encuentra a tu compañero perfecto: Adopciones en nuestra
            veterinaria.
          </h2>
          <p className="mb-6 ">
            Descubre historias conmovedoras de adopciones en nuestra
            veterinaria. Conectamos a animales necesitados con hogares amorosos,
            creando lazos únicos entre humanos y mascotas. Encuentra tu
            compañero peludo y experimenta la alegría que una adopción puede
            traer a tu vida.
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4">
            <li>Explora Nuestras Historias</li>
            <li>Mascotas en Busca de Hogar</li>
            <li>Encuentra a Tu Compañero Perfecto</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Ver Más</button>
        </div>
      </div>
    </section>
  );
}

export default Adopcion