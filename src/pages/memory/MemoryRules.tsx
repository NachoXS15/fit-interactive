import { NavLink } from 'react-router-dom'


export default function MemoryRules() {
    return (
        <div className='w-full px-48 h-screen bg-cover bg-center flex flex-col justify-between py-10 items-start' style={{ backgroundImage: `url('/assets/memory_bg.webp')` }}>
            <h2 className=' pt-20 text-7xl font-bold text-darkblue' style={{ fontFamily: 'dynapuff' }}>Juego de la Memoria</h2>
            <div>
                <p className='pb-2 text-5xl font-bold text-darkblue' style={{ fontFamily: 'dynapuff-semi-condensed' }}>OBJETIVO DEL JUEGO:</p>
                <span className='text-4xl font-semibold text-darkblue' style={{fontFamily: 'dynapuff-condensed'}}>Para ganar debes encontrar todos los pares de cartas iguales</span>
            </div>
            <NavLink to='/memorygame-play' className='text-5xl rounded-full bg-darkblue bg-indigo-800 text-white px-7 py-3 mb-20' style={{fontFamily: 'dynapuff'}}>
                Jugar
            </NavLink>
        </div>
    )
}
