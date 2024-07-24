import { useEffect, useState } from 'react';

import { LuUser } from "react-icons/lu";
import ReactStars from 'react-stars';
import { TfiSearch } from "react-icons/tfi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Header = ({ setOpenMenu, openMenu, scrollDown }) => {
    const [showFirstSpan, setShowFirstSpan] = useState(true);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstSpan(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

const navigate = useNavigate()
    return (
        <div className={`header w-full h-[100px] ${!openMenu && 'fixed top-0 left-0 z-30' } `}>
            {!scrollDown && (
                <div className={`sub-header-1 h-[50px] bg-black w-full text-center flex justify-center items-center`}>
                    {showFirstSpan ? (
                        <>
                            <span className='bg-green-500 z-10 w-[10px] h-[10px] rounded-full'></span>
                            <span className='text-xs tracking-wider font-bold mx-3'> Livraison Gratuite dés 100 DT</span>
                        </>
                    ) : (
                        <div className='flex gap-2'>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={15}
                                color2={'#ffd700'}
                                value={5}
                            />
                            <span className='text-sm tracking-wider font-bold'>50.000 + CLIENTS SATISFAIT</span>
                        </div>
                    )}
                </div>
            )}
            <div className={`sub-header-2 p-3 w-full flex items-center justify-between ${openMenu ? 'bg-[#f9f6f6]' : 'bg-white'}`}>
                <div className='text-black hidden tracking-wider text-xl md:flex gap-5 p-5 w-[20%]'>
                    <span className='hover:border-b hover:border-slate-950 cursor-pointer'>Homme</span>
                    <span className='hover:border-b hover:border-slate-950 cursor-pointer'>Femme</span>
                </div>
                <div onClick={() => setOpenMenu(!openMenu)} className='md:hidden block w-[20%] text-black text-3xl md:text-4xl'>
                    <CiMenuBurger />
                </div>
                <span onClick={()=>navigate('/')} className='text-black font-extrabold w-[40%] md:w-[60%] text-center md:text-6xl text-3xl'>
                    NOO<span className="last-letter md:text-6xl text-3xl text-black" data-last="N"></span>
                </span>
                <div className='md:w-[15%] w-[30%] flex justify-between mr-5'>
                    <div className='hidden md:block text-black flex-col items-center gap-1'>
                        <LuUser className='text-black text-3xl md:text-4xl' />
                        <div className='text-xs mb-0'>compte</div>
                    </div>
                    <div className='text-black flex-col flex justify-center items-center'>
                        <TfiSearch className='items-center text-3xl md:text-4xl' />
                        <span className='text-xs mb-0'>Chercher</span>
                    </div>
                    <div className='text-black flex-col flex justify-center items-center'>
                        <LiaShoppingBagSolid className='items-center text-3xl md:text-4xl' />
                        <span onClick={()=>navigate('/cart')} className='text-xs mb-0 cursor-pointer'>Panier</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
