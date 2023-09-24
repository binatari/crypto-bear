import React from 'react'
import { sponsors } from '../../data'

const Sponsors = () => {
  return (
    <div className="w-full container mx-auto flex flex-col items-center justify-center gap-6 pb-[160px]">
      <h3 className="text-3xl md:text-5xl mb-12 leading-[122%] text-[#00D770] w-full max-w-[1072px]">
        <span className="block text-white">Partners &</span>Sponsors
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {sponsors.map((sponsor) => (
          <img src={sponsor} />
        ))}
      </div>
    </div>
  )
}

export default Sponsors