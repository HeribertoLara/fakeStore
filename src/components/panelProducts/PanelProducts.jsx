import React,{useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './PanelProducts.css'
import CardProduct from '../CardProduct/CardProduct'
import { HeaderShop } from '../HeaderShop/HeaderShop'
const PanelProducts=()=> {
  const [products, setProducts]= useState([])
  const [countCart, setCountCart]=useState(0) 
  const [cart, setCart]=useState([])


  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
        
       
      );
    setProducts(res.data)
    
    return res;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(()=>{
    getProducts()

  },[])

  useCallback(()=>{
    setCountCart(cart.lengt)

},[cart])
  
  return (
    <>
      <HeaderShop  
        cart={cart} 
        countCart={countCart}  
        setCountCart={setCountCart}
      />
      <section className='cards'>
        {
          products.map((product)=>(

            <CardProduct 
              key={product.id} 
              product={product}
              cart={cart}
              setCart={setCart}
              setCountCart={ setCountCart }
            />

            ))
          }

      </section>
    </>
  )
}

export {PanelProducts}




