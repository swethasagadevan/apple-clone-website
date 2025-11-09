import React from 'react'
import {FaAppStore} from 'react-icons/fa'
import imageone from '../assets/images/section1.jpg'
import imagetwo from '../assets/images/section2.jpg'
import imagethree from '../assets/images/section3.jpg'
import imagefour from '../assets/images/section4.jpg'
import imagefive from '../assets/images/section5.jpg'
import imagesix from '../assets/images/section6.jpg'

const content=[
  {
    image:imageone,
    title:"WATCH SERIES 11",
    para:"The Ultimate watch for a healthy life."
  },
  {
    image:imagetwo,
    title:"iPad Pro",
    para:"Advance AI Performance and game-changing capablities."
  },
  {
    image:imagethree,
    title:"iPods Pro 3",
    para:"The worlds best in-ear Active Noise Cancellation. "
  },
  {
    image:imagefour,
    title:"WATCH SE 3",
    para:"Walk it. Talk it. Track it. Love it."
  },
  {
    image:imagefive,
    title:"MacBook Air",
    para:"Sky blue colour. sky high performance with M4"
  },
  {
    image:imagesix,
    title:"Trade In",
    para:"Upgrade and save. Its that easy"
  },
];

const Mainsection = () => {
  return (

    <section className='flex flex-wrap justify-between'>
    
      {
        content.map((values,index)=>(
            <div className='relative flex-grow m-2' style={{flexBasis:"47%"}} key={index}>
              {/* <div className='bg-contain bg-no-repeat' style={{backgroundImage:`url(${values.image})`,width:"100%",height:"100%"}} ></div> */}

              <img src={values.image} alt="apple product image" className='w-full h-full'/>
              <div className={`absolute ${index==3?"bottom-0":"top-0"} py-2 text-center left-4 right-4 ${index==1?"text-white":"text-black"}`}>
                  <h3 className='text-xs md:text-sm lg:text-2xl font-bold'>{values.title}</h3>
                  <p className='text-xs md:text-sm lg:text-lg'>{values.para}</p>
                  <button className='bg-blue-600 text-white px-4 py-2 mt-2 rounded-3xl mx-4 text-xs md:text-sm lg:text-lg'>Learn more</button>
                  <button className='bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-3xl text-xs md:text-sm lg:text-lg'>Buy</button>
              </div>
              
            </div>
        ))
      }
      </section>
  
  )
}

export default Mainsection;