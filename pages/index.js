//Importar Componentes
import Mascotas from "@/components/Mascotas"
import Hero from "@/components/Hero"
import Servicios from "@/components/Servicios"
import Adopcion from "@/components/Adopcion"
import NuevaLetra from "@/components/NuevaLetra"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <Hero/>
      <Mascotas/>
      <Servicios/>
      <Adopcion/>
      <NuevaLetra/>
      <Footer/>
    </div>
  )
}
