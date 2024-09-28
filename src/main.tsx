import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MemoryRules from './pages/memory/MemoryRules.tsx'
import MemoryPlay from './pages/memory/MemoryPlay.tsx'
import Ruleta from './pages/Ruleta/Ruleta.tsx'
import QAPlay from './pages/qa/QAPlay.tsx'
import MapMenu from './pages/map/MapMenu.tsx'
import North from './pages/map/North.tsx'
import South from './pages/map/South.tsx'
import West from './pages/map/West.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  //memorygame
  {
    path: '/memorygame-rules',
    element: <MemoryRules />
  },
  {
    path: '/memorygame-play',
    element: <MemoryPlay />
  },
  //ruleta
  {
    path: '/ruleta',
    element: <Ruleta />
  },
  //preguntas
  {
    path: "/qaplay/:id",
    element: <QAPlay />
  },
  //mapa
  {
    path: '/map/menu',
    element: <MapMenu />
  },
  {
    path: '/map/north',
    element: <North />
  },
  {
    path: '/map/south',
    element: <South />
  },
  {
    path: '/map/west',
    element: <West />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
