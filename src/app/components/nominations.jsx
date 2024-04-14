import React from 'react'
import Image from 'next/image'
import Nominations from './../../../public/assets/nomination.webp'
import Events from './../../../public/assets/events.webp'
const nominations = () => {
  return (
    <div className='h-screen bg-white py-24'>
        <div>
            <h1 className="text-4xl text-[#292929] text-center">Nominations and Event</h1>
        </div>
        <div className='grid place-items-center'>
            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                    <Image src={Events} height={450} width={450} alt='award'  className='m-auto'/>
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <Image src={Nominations} height={450} width={450} alt='nomination' className='m-auto'/>
                </div> 
            </div> 
            {/**<div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
            </div> */}
          
        </div>
    </div>
  )
}

export default nominations