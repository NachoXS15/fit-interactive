import { NavLink } from "react-router-dom";
import ArrowBack from "../../components/ArrowBack";

export default function South() {
  return (
    <div className="w-full min-h-screen">
      <header className="w-full h-20 bg-green-800 flex">
        <div className="flex items-center gap-2 pl-20">
          <NavLink to="/map-menu">
            <ArrowBack />
          </NavLink>
          <h2 className="text-3xl font-medium text-white">VOLVER</h2>
        </div>
      </header>
      <section>
        <img src="" alt="" />
      </section>
    </div>
  )
}
