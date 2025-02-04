import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MensPage from './pages/MensPage.tsx'
import WomensPage from './pages/WomensPage.tsx'
import CartPage from './pages/CartPage.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/e-commerce-v2/',
    element: <App />
  },
  {
    path: '/men',
    element: <MensPage />
  },
  {
    path: '/women',
    element: <WomensPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/:id',
    element: <ProductDetails />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
