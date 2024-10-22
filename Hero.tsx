import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen  bg-no-repeat bg-[url(/linkden.png)]  bg-cover'
style={{backgroundSize:"25%", backgroundPosition:"right 40px top 90px"}}
>
  <Navbar/>
<div className= 'container grid lg:gride-cols-2 h-[cals(100vh-80px)]'>
<div className='hidden lg:block'></div>
<div className='text-[200px] sm:text-[60px] font-bold mt-8 leading-tight flex-justyfy-center'>
  <div>
    <p className='text-pink-600 hover:text-yellow-300'>I'm</p>
    <p className='text-pink-600 hover:text-yellow-300'>Sadia</p>
    <p className=' text-pink-600 hover:text-yellow-300'>imran</p>
  </div>
</div>
</div>
</div>
  )
}
export default Hero;
