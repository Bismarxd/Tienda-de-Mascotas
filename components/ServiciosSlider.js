//importar Next Image
import Image from "next/image";

//importar swiper react componentes
import { Swiper, SwiperSlide } from "swiper/react";

//importar required modules
import { Navigation } from "swiper/modules";

//importr swiper styles
import "swiper/css/navigation";
import "swiper/css";

//Importar Imagenes
import Servicio1 from "../public/img/services/service-icon1.svg";
import Servicio2 from "../public/img/services/service-icon2.svg";
import Servicio3 from "../public/img/services/service-icon3.svg";

const servicios = [
  {
    imagen: Servicio1,
    nombre: "Farmacia",
    descripcion:
      "ofrecemos una amplia gama de medicamentos y productos de salud diseñados para mantener a tus queridas mascotas en su mejor estado. ",
    textoBtn: "Ver Mas",
  },
  {
    imagen: Servicio2,
    nombre: "Corte y bañado de mascotas",
    descripcion:
      "Brindamos servicios de corte y bañado de mascotas para mantener a tus compañeros peludos luciendo y sintiéndose geniales.",
    textoBtn: "Ver Mas",
  },
  {
    imagen: Servicio3,
    nombre: "Venta de ropa para mascota",
    descripcion:
      "Explora nuestra selección de moda para mascotas y dale a tu compañero peludo un estilo único.",
    textoBtn: "Ver Mas",
  },
];

const ServiciosSlider = () => {
  return (
    <Swiper
      
      slidesPerView={1}
      spaceBetween={40}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[720px]"
    >
      {servicios.map((servicio, index) => {
        return (
          <SwiperSlide 
            className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8"
            key={index}
          >
            <Image className="mb-9" src={servicio.imagen} width={200} height={200} alt="" />
            <div className="font-bold text-4xl mb-6 uppercase">{servicio.nombre}</div>
            <div>{servicio.descripcion}</div>
            <button className="btn btn-primary mt-5">{servicio.textoBtn}</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiciosSlider;
