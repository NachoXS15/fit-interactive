import { NavLink } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack";

export default function North() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full h-20 bg-red-lr flex">
        <div className="flex items-center gap-2 pl-20">
        <NavLink to="/map-menu">
            <ArrowBack />
          </NavLink>
          <h2 className="text-3xl font-medium text-white">VOLVER</h2>
        </div>
      </header>
      <section className="w-full h-fit mt-20 flex items-center justify-center px-20">
        <img src="/assets/map/mapNorth.png" width={500} alt="" />
        <div className="flex flex-col items-end">
          <img src="/assets/map/logos/northColor.png" width={300} alt="" />
          <h2 className="text-end text-3xl mb-10 font-semibold text-gray-500">La Rioja Capital // Sanagasta // Castro Barros <br /> // Arauco // San Blas de Los Sauces</h2>
          <p className="w-11/12">Este recorrido por los departamentos de Capital, Sanagasta, Castro Barros, Arauco y San Blas de los Sauces ofrece la oportunidad de explorar siglos de tradición, historia y cultura originaria. Además de conectar con la naturaleza y la aventura, se pueden descubrir huellas de dinosaurios en el Parque de Dinosaurios. A lo largo del camino, se encuentran pueblos pintorescos con antiguas casonas coloniales y campos frutales, en un entorno de clima agradable y paisajes únicos. La región se destaca por sus sabores auténticos en vinos, dulces y productos artesanales, así como por sus museos, capillas y senderos religiosos como el Señor de la Peña, que reflejan vivas tradiciones locales.</p>
        </div>
      </section>
    </div>
  )
}
