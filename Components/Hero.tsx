"use client";
import Image from 'next/image';
import CustomButton  from './CustomButton';

const Hero = () => {
  const handleScroll = () =>{
    
  
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        Discover, Reserve, and Drive - Your Perfect Car Awaits!
        </h1>
        <p className='hero__subtitle'>
        Enhance Your Car Rental Journey with Our Seamless Booking Process!
        </p>

        <CustomButton
        title="Expolre Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div> 
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/Hero_car.png' alt='hero_car' fill className='object-contain'/>
          {/* <div className='hero__image-overlay'></div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero