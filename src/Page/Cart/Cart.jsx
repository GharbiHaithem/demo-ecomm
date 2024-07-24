import React, { useEffect, useState } from 'react'

const Cart = ({cart,setCart}) => {
  const [updateQty,setUpdateQty] = useState(false)
      useEffect(() => {
           if(updateQty){
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCart(storedCart);
            setUpdateQty(false);
           }
          }, [updateQty,setCart]);
          console.log(cart)
          const decrimente= (e)=>{
            setUpdateQty(true)
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            const findCart = cart?.filter(item => item.id === e);

            // Vérifie si le produit est trouvé et décrémente la quantité si elle est supérieure à 0
            if (findCart.length > 0 && findCart[0].quantity > 1) {
              findCart[0].quantity -= 1;
          
              // Met à jour le panier complet avec la nouvelle quantité du produit
              const updatedCart = storedCart.map(item =>
                item.id === e ? { ...item, quantity: findCart[0].quantity } : item
              );
          
              // Met à jour le panier dans le localStorage
              localStorage.setItem('cart', JSON.stringify(updatedCart));
            } else if (findCart.length > 0 && findCart[0].quantity === 1) {
              setUpdateQty(true)
              // Si la quantité est 1, retire le produit du panier
              const updatedCart = storedCart.filter(item => item.id !== e);
              localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
          }
  return (
    <div className='h-[100vh] w-[80%] mx-auto  py-20 mt-10  bg-white ' >
      <h1 className='text-xl text-black  mt-10'>
         {
        (cart?.map((x , index)=>(
            <>
           <div key={x?.index} className='flex flex-col mb-5 gap-20 '>
                <div className='flex justify-between'>
                <span className='p-4 text-blue-600 font-bold text-sm'>{x?.title}</span>
                <img className='w-[100px] h-[100px]' src={x?.images} />
                <span>{x?.quantity}</span>
                <span>{x?.price}</span>
                <span>{x?.price * x?.quantity}</span>
                <button className='bg-slate-500 rounded-full text-white w-[50px] h-[50px] p-1' onClick={()=>decrimente(x?.id)}  >-</button>
                
                </div>
           </div>
            </>
        )))     
   
         }
      </h1>
    </div>
  )
}

export default Cart