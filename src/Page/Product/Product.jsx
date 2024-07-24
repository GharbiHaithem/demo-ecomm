import React from 'react'

const Product = ({product,addToCart,cart}) => {
console.log(cart)
  return (
      <div  className='md:text-lg  text-sm md:w-[32%]  w-[calc(50%-16px)] text-black'>{
            <div className='flex flex-col gap-4'>
            
            <span className='text-sm font-bold text-blue-700'> {product?.title}</span>
            <span className='text-xs font-light'> {product?.description}</span>
            <img className='w-full object-contain h-[350px]' src={product?.images} />
            <button onClick={() => addToCart(product)} className='bg-blue-400 hover:bg-blue-900 text-white p-3 rounded-sm' >Add to cart </button>
            </div>
             }</div>
  )
}

export default Product