import { useEffect, useState } from "react";
import Header from "./Page/Header/Header";
import Menu from "./Page/Menu/Menu";
import Home from "./Page/Home/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from "./Page/Cart/Cart";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling", window.scrollY); // Ajoutez ce console.log pour déboguer
      if (window.scrollY >= 70) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
  <>
    <div className={`w-full h-[max-content] ${openMenu ? 'bg-[#f9f6f6]' : 'bg-white'}`}>
    
      
      {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      <BrowserRouter>
      <Header scrollDown={scrollDown} openMenu={openMenu} setOpenMenu={setOpenMenu} /> 
      <Routes>
        <Route  path='/' element={<Home cart={cart} setCart={setCart}  openMenu={openMenu}/>} />
        <Route  path='/cart' element={<Cart cart={cart} setCart={setCart}   />} />
        
      </Routes>
      </BrowserRouter>
    </div>
    
  </>
  );
}

export default App;
