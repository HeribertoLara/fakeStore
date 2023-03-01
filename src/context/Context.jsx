import React,{createContext, useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export const  DataContext = createContext()


export const  DataProvider= ({children}) => {
    const [countCart, setCountCart]=useState(0) 
    const [cart, setCart]=useState([])
    const [products, setProducts]= useState([])
    const [text, setText]=useState('')
    
    let items 

    let searchedProducts = []
    if (!text >=1){
      searchedProducts = products
    }else{
      searchedProducts = products.filter(product => {
        const productText = product.title.toLowerCase();
        const searchText = text.toLowerCase();
        return productText.includes(searchText);
      })

    }

    if(!searchedProducts){
      items = products
    }else{
    items = searchedProducts
  }
    console.log('products ',searchedProducts)
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
        setCart,
        text,
        setText,
        items
        }}
    >
    {children}
    </DataContext.Provider>
  )

}
