import React from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'
function Shop() {
  return (
    <>
    <navbar>
      <Navbar />
    </navbar>
    <div>
        <ProductList/>
    </div>
    </>
  )
}

export default Shop