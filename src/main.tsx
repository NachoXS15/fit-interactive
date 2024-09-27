import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MemoryRules from './pages/memory/MemoryRules.tsx'
import MemoryPlay from './pages/memory/MemoryPlay.tsx'

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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
