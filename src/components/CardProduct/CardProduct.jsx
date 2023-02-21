import React from 'react'
import {AiTwotoneStar, AiOutlineShopping, AiOutlineShoppingCart} from 'react-icons/ai'
import './CardProduct.css'

const CardProduct= ({
    setCart,
    product,
    cart,
    setCountCart
}) => {

   

    const addProduct = (cart, product) =>{
        cart.push(product)
        setCart([...cart])
        console.log(cart)
        setCountCart(cart.length)
    }

  return (
    <div className='card-product'>
        <img className="cards--image" 
            src={'https://placeimg.com/640/480/any'} 
            alt="" />
        <section  className='card--section'>

            <h3 className='card--title'>{
                product.title.length>30? 
                product.title.slice(0, 30) +"...":
                product.title}
            </h3>


            <p className='card--price'>$ {product.price}</p>   
            <div className='card--rating'>
                <p className='card--rate'>
                    <AiTwotoneStar/>{product.rating['rate']}    
                </p>
                <p className='card--count'>
                    <AiOutlineShopping/>{ product.rating.count < 5 ?
                    'ultimas piezas':
                    product.rating['count']} 
                </p> 
                <button 
                    className='card--button'
                    onClick={()=>addProduct(cart, product)}
                    >
                    <AiOutlineShoppingCart
                        className='card--button--icon'
                    />
                </button> 
            </div>
        </section>
    </div>
  )
}

export default CardProduct