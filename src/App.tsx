import './App.css'
import React from 'react'
import ProductList from './components/Product List/product-list'
import NavBar from './components/Navigation Bar/navbar'

const App: React.FC = () => {

  return (
    <>
      <NavBar />
      <ProductList />
    </>
  )
}

export default App
