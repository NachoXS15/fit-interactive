import { NavLink } from "react-router-dom";

export default function MapMenu() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <NavLink className="w-1/3 min-h-screen flex items-center justify-center bg-red-700">
            <h2>NORTE</h2>
        </NavLink>
        <NavLink className="w-1/3 min-h-screen flex items-center justify-center bg-orange-400">
            <h2>OESTE</h2>
        </NavLink>
        <NavLink className="w-1/3 min-h-screen flex items-center justify-center bg-orange-900">
            <h2>SUR</h2>
        </NavLink>
    </div>
  )
}
