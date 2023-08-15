//importar componentes
import ServiciosSlider from "./ServiciosSlider"


const Servicios = () => {
  return (
    <section className="bg-services bg-cover bg-no-repeat bg-center  min-h-[1000px] md:min-h-[862px] py-8">
      <div className="container mx-auto h-[862px]">
        <h2 className="h2 text-center text-6xl mb-12">Nuestros Servicios</h2>
        <ServiciosSlider />
      </div>
    </section>
  );
}

export default Servicios