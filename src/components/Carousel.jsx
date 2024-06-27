import { useEffect, useState } from 'react'
import { carouselContent } from '../utils/LandinPageContents'

// const images=[carouselImage1,carouselImage2,carouselImage3];

const Carousel = () => {

    const[currentSlide,setCurrentSlide]=useState(0)
    // To load the images from the array
    useEffect(()=>{
       const interval=setInterval(()=>{
        const arrayLength=carouselContent.length;
        setCurrentSlide((prev)=>{return prev+1<arrayLength?prev+1:0})
       },8000)
       return ()=> {clearInterval(interval)}
    },[])
    console.log(currentSlide);
  return (
    <div className="max-container">
          <div className='w-full h-[34rem] relative'>
          <img src={carouselContent[currentSlide].image}  alt="no image" className='w-full h-full' />
           <div className='absolute left-4 bottom-16 px-4 py-4 bg-slate-400   max-lg:left-4  lg:px-16 lg:left-20 '>
           <h2 className='font-bold text-4xl max-w-96 '>{carouselContent[currentSlide].heading}</h2>
           <p className='font-semibold leading-6 max-w-[34rem] hidden lg:block'>{carouselContent[currentSlide].paragraph}</p>
           </div>
          </div>
    </div>
  )
}

export default Carousel
