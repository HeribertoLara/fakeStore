import React, { useState } from 'react'
import './HeaderShop.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

 const HeaderShop = ({
    countCart,

 })=> {
    
    const [onFocus, setOnFocus ]= useState(false)
    
  return (
    <header className='header'>
        <section
            className='header--finder'
        >
            <div className='header--logo'>
                <h1 className='header--logo--title'>Fake  
                
                    <SiHomeassistantcommunitystore className='header--logo--icon'/>
                
                    Store
                </h1>
            </div>
            
            <BiSearchAlt className={onFocus?'header--search--green': 'header--search'} />
            <input  
                className="header--input" 
                placeholder= "what are you looking for?"
                type="text"
                onFocus={()=>setOnFocus( true )}
                onBlur={()=> setOnFocus(false)}
                 />
            
            <p className='header--text'>free Shipping  on<br/> <b>All orders over $149 </b> </p>
            <TbTruckDelivery className='header--icon--truck'/>
            
                
            <button className='header--bag'>
                <HiOutlineShoppingBag className='header--icon--bag'/>
                <div className="header--bag--circle">{countCart}</div>
            </button>
         
        </section>
    </header>
  )
}
 export{ HeaderShop }