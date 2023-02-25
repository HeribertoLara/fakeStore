import React,{createContext, useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export const  DataContext = createContext()


export const  DataProvider= ({children}) => {
    const [countCart, setCountCart]=useState(0) 
    const [cart, setCart]=useState([])
    const [products, setProducts]= useState([])
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
    <DataContext.Provider value={{
        countCart,
        setCountCart,
        products,
        setProducts,
        cart, 
        setCart
        }}
    >
    {children}
    </DataContext.Provider>
  )

}
