import React, { useEffect, useState } from 'react'
import i1 from '../../images/handsome-man-street-shoot-long-shot.jpg'

import i2 from '../../images/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated.jpg'
import i3 from '../../images/portrait-young-man-casual-outfit.jpg'
import i4 from '../../images/girl.jpg'
import i5 from '../../images/full-shot-woman-posing-with-hat.jpg'
import { data } from '../../data'
import Product from '../Product/Product'


const Home = ({openMenu , cart,setCart}) => {

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);
  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(cart);
  };
  const addToCart = (product) => {
    const existingProductIndex = cart?.findIndex(item => item.id === product.id);
    let updatedCart = [...cart];

    if (existingProductIndex >= 0) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

     saveCart(updatedCart);
  };
  return (
<>
<div className={`${openMenu ? 'mt-[30px]' : 'mt-[120px]'}  `}>
      {/* <div className='w-full flex-wrap relative flex md:h-[800px] h-[500px]'>
    <div className='absolute top-0 left-0 md:h-[800px] w-full h-[500px] bg-[#00000035]'></div>
    <img className='md:w-1/2 md:h-full h-1/2 w-1/2 object-cover' src={i1} alt="Image 1"/>
    <img className='md:w-1/2 md:h-full h-1/2 w-1/2 object-cover' src={i3} alt="Image 3"/>
    <img className='md:w-1/2 md:h-full h-1/2 w-1/2 md:hidden block object-cover' src={i4} alt="Image 4"/>
    <img className='md:w-1/2 md:h-full h-1/2 w-1/2 md:hidden block object-cover' src={i5} alt="Image 5"/>
    <div className='absolute inset-0 flex justify-center items-center z-10'>
    <button className='m-2 px-4 py-2 md:p-3 bg-[#a5a2a2] hover:bg-black hover:text-white text-black rounded-lg tracking-widest'>HOMME</button>
    <button className='m-2 px-4 py-2 md:p-3 bg-[#a5a2a2]  hover:bg-black hover:text-white text-black rounded-lg tracking-widest'>FEMME</button>
</div>
</div> */}

    </div>
    <div className='w-[80%] h-[max-content] py-40 mx-auto product flex justify-between flex-wrap  gap-4  my-4 bg-white p-4'>
 {
  data?.map((product,index)=>(<>
<Product product={product} key={index} cart={cart} addToCart={addToCart}  />

  </>))
 }
    </div>
</>
  )
}

export default Home