import { useState } from "react"
//Imagen
import Image from "next/image"
//Importar Iamgenes
import mascota1 from '../public/img/pets/1.png'
import mascota2 from "../public/img/pets/2.png";
import mascota3 from '../public/img/pets/3.png'
import mascota4 from '../public/img/pets/4.png'
import mascota5 from '../public/img/pets/5.png'
import mascota6 from '../public/img/pets/6.png'
import mascota7 from '../public/img/pets/7.png'
import mascota8 from "../public/img/pets/8.png";
import mascota9 from '../public/img/pets/9.png'
import mascota10 from "../public/img/pets/10.png";
import mascota11 from "../public/img/pets/11.png";
import mascota12 from "../public/img/pets/12.png";
import insignia from "../public/img/pets/fondo.png";

const mascotas = [
  {
    id: 1,
    categoria: "gato",
    nombre: "mishi",
    imagen: mascota1,
  },
  {
    id: 2,
    categoria: "pajaro",
    nombre: "rotty",
    imagen: mascota2,
  },
  {
    id: 3,
    categoria: "zorro",
    nombre: "fox",
    imagen: mascota3,
  },
  {
    id: 4,
    categoria: "gato",
    nombre: "mishi2",
    imagen: mascota4,
  },
  {
    id: 5,
    categoria: "Hamster",
    nombre: "alex",
    imagen: mascota5,
  },
  {
    id: 6,
    categoria: "loro",
    nombre: "toni",
    imagen: mascota6,
  },
  {
    id: 7,
    categoria: "loro",
    nombre: "leonard",
    imagen: mascota7,
  },
  {
    id: 8,
    categoria: "gato",
    nombre: "pulgoso",
    imagen: mascota8,
  },
  {
    id: 9,
    categoria: "puma",
    nombre: "simba",
    imagen: mascota9,
  },
  {
    id: 10,
    categoria: "lori",
    nombre: "roy",
    imagen: mascota10,
  },
  {
    id: 11,
    categoria: "perro",
    nombre: "jonhy",
    imagen: mascota11,
  },
  {
    id: 12,
    categoria: "conejo",
    nombre: "blanca",
    imagen: mascota12,
  },
];


const Mascotas = () => {
  const [detallesMascota, setDetallesMascota] = useState(mascotas[10]);
  const [mascotaIndex, setMascotaIndex] = useState(10)

  const getDetallesMascota = id => {
    const mascota = mascotas.find(mascota => {
      return mascota.id === id;
    })

    setDetallesMascota(mascota)
  }
  
  return (
    <section className="bg-cyan-950 bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* insignia */}
        <div className="hidden xl:flex xl:w-[50%] xl:pl-[160px]">
          <Image src={insignia} width={500} height={500} alt=""/>
        </div>
        {/* mascotas */}
        <div className=" flex-1 flex flex-col lg:flex-row">
          {/* detalles de la mascota */}
          <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              {/* categoria */}
              <div className="text-[32px] capitalize">
                {detallesMascota.categoria}
              </div>
              {/* nombre */}
              <div className="uppercase text-[17px] mb-1">
                ({detallesMascota.nombre})
              </div>
              {/* imagen */}
              <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full">
                <Image
                  src={detallesMascota.imagen}
                  width={150}
                  height={150}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* mascotas */}
          <div className="relative lg:w-[60%] flex-1 flex items-center">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
              {mascotas.map((mascota, index) => {
              return (
                <div 
                  onClick={  () => 
                    {
                      getDetallesMascota(mascota.id);
                      setMascotaIndex(index);
                    }
                  }
                  className="cursor-pointer relative"
                  key={index}>
                    {/* overlay */}
                  <div 
                    className={`w-full h-full absolute rounded-full 
                      ${mascotaIndex === index ? 
                        'border-2 border-white' : 
                        'bg-black/40'}`}>
                        
                  </div>
                  <Image
                    src={mascota.imagen}
                    width={95}
                    height={95}
                    alt="imagen mascota"
                    draggable="false"
                  />
                </div>
              );
            })}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mascotas