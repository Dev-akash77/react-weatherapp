import React from 'react'
import { MdOutlineDateRange, MdOutlineLocationOn } from 'react-icons/md'

const WeatherBox = () => {
  return (
    <section className='bg-[var(--elem)] rounded-2xl p-5 shadows'>
      <h2 className='text-lg'>Now</h2>
      {/* temparature and image */}
      <div className="flex items-center gap-6">
        <p><span className='text-7xl'>5</span><span className='text-7xl'>°</span><sup className='text-4xl mt-4'>C</sup></p>
        <img src="http://openweathermap.org/img/wn/02d@4x.png" alt="waether based image from open waether" className='w-[7rem] img'/>
      </div>
      {/* temparature and image */}
      <p className='capitalize text-base text-[#f2e0fe]'>Broken Clouds</p>
      <div className='w-full my-2 bg-[#756e7a] h-[.1rem] rounded-lg'></div>
      <div className='flex flex-col gap-2'>
        <div className="flex capitalize items-center gap-2">
        <MdOutlineDateRange className='text-xl'/>
        wednesday 1, Mar
        </div>
        <div className="flex capitalize items-center gap-2">
        <MdOutlineLocationOn  className='text-xl'/>
        London, GB
        </div>
      </div>
    </section>
  )
}

export default WeatherBox