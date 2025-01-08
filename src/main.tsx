import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MensPage from './pages/MensPage.tsx'
import WomensPage from './pages/WomensPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/men',
    element: <MensPage />
  },
  {
    path: '/women',
    element: <WomensPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
