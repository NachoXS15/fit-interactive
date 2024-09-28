import { NavLink } from 'react-router-dom'


export default function MemoryRules() {
    return (
        <div className='w-full px-48 h-screen bg-cover bg-center flex flex-col justify-around py-10 items-start' style={{ backgroundImage: `url('/assets/memory_bg.webp')`, fontFamily: 'franklin-gothic-atf, sans-serif;' }}>
            <h2 className=' pt-20 text-7xl font-bold text-darkblue uppercase'>Juego de la Memoria</h2>
            <div>
                <p className='pb-2 text-5xl font-bold text-darkblue'>OBJETIVO DEL JUEGO:</p>
                <span className='text-3xl font-semibold text-darkblue2' >Para ganar debes encontrar todos los pares de cartas iguales</span>
            </div>
            <NavLink to='/memorygame-play' className='text-5xl uppercase rounded-full bg-orange-600 text-white font-bold px-7 py-3 mb-20'>
                Jugar
            </NavLink>
        </div>
    )
}
