import { NavLink } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack";


export default function West() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full h-20 bg-orange-lr flex">
        <div className="flex items-center gap-2 pl-20">
        <NavLink to="/map-menu">
            <ArrowBack />
          </NavLink>
          <h2 className="text-3xl font-medium text-white">VOLVER</h2>
        </div>
      </header>
      <section className="w-full h-fit mt-20 flex items-center justify-center px-20">
        <img src="/assets/map/mapWest.png" width={500} alt="" />
        <div className="flex flex-col items-end">
          <img src="/assets/map/logos/westColor.png" width={300} alt="" />
          <h2 className="text-end text-3xl mb-10 font-semibold text-gray-500">Famatina // Chiletico // Gral. Felipe Varela <br /> // Gral. Lamadrid // Vinchina</h2>
          <p className="w-11/12">Esta región de La Rioja, que incluye los departamentos Famatina, Chilecito, General Felipe Varela, General Lamadrid y Vinchina, es un paraíso de paisajes con montañas, colores y geoformas. Ofrece actividades como senderismo, cicloturismo y la posibilidad de retroceder 250 millones de años en el Parque Nacional Talampaya, una de las 7 Maravillas Naturales de Argentina. La Cuesta de Miranda y la Ruta 40 brindan vistas impresionantes a 2.000 metros de altura, mientras que el área es reconocida por su producción de viñedos, nogales y frutales.</p>
          <br />
          <p className="w-11/12">El recorrido incluye la Vuelta al Pique, un camino montañoso a 3.000 metros, y el histórico Cable Carril, una obra de ingeniería construida a principios del siglo XX que asciende hasta los 4.600 metros en la Mina La Mejicana. Actividades como 4x4, trekking y mountain bike son ideales en esta zona. Además, la Reserva Natural Cerro El Toro resguarda restos arqueológicos, y la Laguna Brava, junto al Cráter Corona del Inca, ofrece paisajes majestuosos de flamencos, vicuñas y flora autóctona. Estos rincones son resguardados por refugios cordilleranos que protegen a los viajeros del imponente viento blanco</p>
        </div>
      </section>
    </div>
  )
}
