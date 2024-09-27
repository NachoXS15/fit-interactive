import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div
      className="w-full min-h-screen px-10 pt-32 bg-cover bg-center font-bold bg-no-repeat flex items-center justify-center gap-10 text-white"
      style={{ backgroundImage: 'url("/assets/bg_inicio.jpg")', fontFamily: 'franklin-gothic-atf, sans-serif;' }}
    >
      <NavLink to="/" className="w-1/4 h-52 active:scale-110 transition flex items-center justify-center text-3xl rounded-3xl bg-indigo-500">
        <h2>MAPA INTERACTIVO</h2>
      </NavLink>
      <NavLink to="/ruleta" className="w-1/4 h-52 active:scale-110 transition flex items-center justify-center text-3xl rounded-3xl bg-indigo-500">
        <h2>RULETA</h2>
      </NavLink>
      <NavLink to="/" className="w-1/4 h-52 active:scale-110 transition flex items-center justify-center text-3xl rounded-3xl bg-indigo-500">
        <h2>ROMPECABEZAS</h2>
      </NavLink>
      <NavLink to="/memorygame-rules" className="w-1/4 h-52 active:scale-110 transition flex items-center justify-center text-3xl rounded-3xl bg-indigo-500">
        <h2>MEMORIA</h2>
      </NavLink>
    </div>
  )
}

