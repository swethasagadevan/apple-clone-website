import React,{useState} from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import imageone from '../assets/images/slider1.jpg'
import imagetwo from '../assets/images/slider2.jpg'
import imagethree from '../assets/images/slider3.jpg'
import imagefour from '../assets/images/slider4.jpg'
import imagefive from '../assets/images/slider5.jpg'
import imagesix from '../assets/images/slider6.jpg'
import imageseven from '../assets/images/slider7.jpg'
import imageeight from '../assets/images/slider8.jpg'

const images=[
    imageone,imagetwo,imagethree,imagefour,imagefive,imagesix,imageseven,imageeight
];

const Slidersection = () => {
    const [slide,setSlide]=useState(0);

const prevSlide = () =>{
    if (slide==0){
        setSlide(images.length-1)
    }
    else{
        setSlide(slide-1)
    }
    
    }

const nxtSlide =()=>{
    if(slide==images.length-1)
    {
        setSlide(0)
    }
    else{
        setSlide(slide+1)
    }
}

  return (
    <section>
        <div className='flex items-center justify-center gap-3'>
        <FaArrowAltCircleLeft className='h-10 w-10' onClick={prevSlide}/>
        <div className='flex justify-center' style={{width:"100%"}}>
            {
            images.map((image,index)=>(
                
                <img key={index} src={image} alt="slider image" className={`${slide==index?"inline-block":"hidden"}`} />
            ))
            
        }
        </div>
        <FaArrowAltCircleRight className='h-10 w-10' onClick={nxtSlide}/>
        </div>
        <span className='flex justify-center'>
            {
                images.map((_,index)=>(
                    <button 
                    key={index} 
                    className={` h-3 w-3 rounded-3xl m-2 ${slide==index?"bg-black":"bg-gray-500"}`}
                    onClick={()=>setSlide(index)}
                    ></button>
                ))
            }
        </span>
    </section>
  )
}

export default Slidersection;