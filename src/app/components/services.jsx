import React from 'react'
import Image from 'next/image'
import Wedding from './../../../public/assets/wedding.webp'
import Prenup from './../../../public/assets/prenup.webp'
import Debut from './../../../public/assets/debut.webp'
import Christening from './../../../public/assets/christening.webp'
const services = () => {
  return (
    <div className='h-screen bg-white text-center'>
        <div>
            <h1 className='text-[#292929] text-4xl font-medium p-2'>WHAT WE DO</h1>
        </div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <Image src={Wedding} className='w-full h-screen object-contain' alt='wedding'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle opacity-60">❮</a> 
                    <a href="#slide2" className="btn btn-circle opacity-60">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <Image src={Prenup} className='w-full h-screen object-contain' alt='prenup'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle opacity-60">❮</a> 
                    <a href="#slide3" className="btn btn-circle opacity-60">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <Image src={Debut} className='w-full h-screen object-contain' alt='debut' priority/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle opacity-60">❮</a> 
                    <a href="#slide4" className="btn btn-circle opacity-60">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <Image src={Christening} className='w-full h-screen object-contain' alt='christening'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle opacity-60">❮</a> 
                    <a href="#slide1" className="btn btn-circle opacity-60">❯</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default services