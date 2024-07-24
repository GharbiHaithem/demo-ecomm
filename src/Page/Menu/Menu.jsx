import { useEffect, useRef } from "react"

const Menu = ({openMenu , setOpenMenu}) => {
  const menuRef= useRef(null)
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='fixed z-20 top-0 left-0 bg-white w-[70%] h-[100vh]' ref={menuRef}>Menu</div>
  )
}

export default Menu