import { NavLink } from "react-router-dom";

export default function MapMenu() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
        <NavLink to="/map/north" style={{backgroundImage: 'url("https://scontent.fmdz5-1.fna.fbcdn.net/v/t1.6435-9/67460186_946962972324319_4620240493769392128_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFTgayrlOJcooBFRvZhE4DCrLY3X1fSDnWstjdfV9IOdfJJaxszmWdMN15ob__QHut1wc-y9frcc-4oZpdsQmFF&_nc_ohc=1eoK9e5qlkEQ7kNvgFc2Lnw&_nc_ht=scontent.fmdz5-1.fna&oh=00_AYAD4V5NxLx8oGH5o-iF110rDrlgl_BDPvDryeE-yv6hjg&oe=671EFC12")'}} className="w-1/3 min-h-screen flex items-center justify-center bg-cover">
          <div className="w-full min-h-screen px-10 bg-red-lr bg-opacity-80 flex items-center justify-center active:bg-opacity-85 transition">
            <img src="/assets/map/logos/Norte.png" alt="" />
          </div>
        </NavLink>
        <NavLink to="/map/west" style={{backgroundImage: 'url("https://www.lanacion.com.ar/resizer/v2/laguna-brava-y-sus-7PSIMBYTEBEBNC6Q4NX57UEFBY.jpg?auth=c849e5ff15e01c76517cae3f5da1cdbcddd7eacb8ef2876b197c3089ef6fab1f&width=1920&height=1280&quality=70&smart=true")'}} className="w-1/3 min-h-screen flex items-center justify-center bg-cover bg-center">
          <div className="w-full min-h-screen px-10 bg-orange-lr bg-opacity-70 flex items-center justify-center active:bg-opacity-85 ">
            <img src="/assets/map/logos/Oeste.png" alt="" />
          </div>
        </NavLink>
        <NavLink to="/map/south" style={{backgroundImage: 'url("/assets/map/south_bg.jpg")'}} className="w-1/3 min-h-screen flex items-center justify-center bg-orange-900 bg-opacity-70 bg-cover bg-center">
          <div className="w-full min-h-screen px-10 bg-green-lr bg-opacity-70 flex items-center justify-center active:bg-opacity-85 ">
            <img src="/assets/map/logos/Sur.png" alt="" />
          </div>
        </NavLink>
    </div>
  )
}
