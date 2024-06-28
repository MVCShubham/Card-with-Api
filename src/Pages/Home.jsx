
import React, { useEffect, useState } from 'react'


function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));

  }

  useEffect(() => {
    getProducts();
  }, [])

  

  return (
    <>
      {/* {
        products.map(product => <h5>{product.title}</h5>)
      } */}

      {/* <Link to="/product"><button className=''>Products</button></Link> */}
    </>
  )
}

export default Home
