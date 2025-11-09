import React from 'react'
import headerimage from '../assets/images/headerimage.jpg'
import heroimage from '../assets/images/heroimage.jpg'
import heroimage2 from '../assets/images/hero_endframe.jpg'

const sections =[
    {
        picture:headerimage,
        title:"iPhone 17 Pro",
        para:"All out Pro.",
    },
    {
        picture:heroimage,
        title:"iPhone Air",
        para:"The Thinnest iPhone ever.",
        para2:"With the power of pro inside."
    },
    {
        picture:heroimage2,
        title:"MacBook Pro 14\"",
        para:"Supercharged by M5",
    },


]


const Hero = () => {
  return (
    <header>
        <p className='bg-neutral-700 text-white p-3 text-center text-sm'>Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI.‡ <button className='text-blue-500'>Buy</button></p> 
        
            {
                sections.map((sections,index)=>(
                    
                   <div className='relative' key={index}>
                   <img src={sections.picture} alt="iphone 17 image" style={{height:"600px"}}/>
                    <div className={`absolute top-0 left-1/4 right-1/4 text-center ${index==1?'text-black':'text-white' }`}>
                        <h2 className='font-semibold text-2xl md:text-3xl lg:text-6xl pt-6'>{sections.title}</h2>
                        <p className=' text-lg md:text-xl lg:text-3xl mt-1'>{sections.para}</p> 
                        {(index==1)?<p className=' text-lg md:text-xl lg:text-3xl'>{sections.para2}</p>:""}
                        <button className='bg-blue-600 text-white px-4 py-2 mt-3 rounded-3xl mx-4'>Learn more</button>
                        <button className='bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-3xl'>Buy</button>
                    </div>
                    </div>
                    
                ))
            }
        
    </header>
  )
}

export default Hero;