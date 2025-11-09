import React, { useEffect } from 'react'
import {FaApple,FaSearch,FaShoppingBag,FaBars} from 'react-icons/fa'

const links = [
    "Store","Mac","iPad","iPhone","Watch","Airpods","TV & Home","Entertainment","Accessories","Support"
]





const Navbar = () => {

  useEffect(()=>{
    const nav_close = document.getElementById("nav_close");
const nav_container= document.getElementById("nav_container");
const nav_baricon = document.getElementById("nav_baricon");

nav_close.addEventListener("click",()=>
{
    nav_container.style.display="none";
});

nav_baricon.addEventListener("click",()=>
{
   nav_container.style.display="flex";
});

  })
  
  return (
    <>
    <nav className='flex justify-between md:justify-evenly items-center bg-black text-gray-300 p-2'>
        <FaApple/>
        {
            links.map((link,index)=>(
                <a href="" className='text-sm hidden md:block hover:text-white' key={index}>{link}</a>
            ))
        }
        
        <div className='flex gap-5'>
          <FaSearch/>
        <FaShoppingBag/>
        
        <div id="nav_baricon" className='block md:hidden cursor-pointer'>
          <FaBars/>
        </div>
        </div>
    </nav>

    <section id="nav_container" className='hidden bg-neutral-900 text-slate-200 flex-col p-7 fixed w-screen h-screen top-0 z-10'>
      <p className='text-right font-bold cursor-pointer' id="nav_close">X</p>
      {
            links.map((link,index)=>(
                <a href="" className='text-lg p-1 font-bold hover:underline' key={index}>{link}</a>
            ))
        }
    </section>
    </>

  )
}

export default Navbar;