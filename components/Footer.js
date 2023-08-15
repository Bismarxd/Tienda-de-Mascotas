//importar iconos
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* logo */}
          <div className="flex-1 text-orange-500 text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6">
            Las Mascotas Primero
          </div>

          <div className="text-white flex-1">
            {/* links */}
            <ul className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8 cursor-pointer">
              <li>
                <a href="#" />
                Servicios
              </li>
              <li>
                <a href="#" />
                Sobre Nosotros
              </li>
              <li>
                <a href="#" />
                Blog
              </li>
              <li>
                <a href="#" />
                Contacto
              </li>
            </ul>
            {/* enlaces sociales */}
            <div className="flex justify-center lg:justify-start">
              <div className="mr-6">Contactanos</div>
              <ul className="flex gap-x-4 ">
                <li>
                  <a href="#">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer