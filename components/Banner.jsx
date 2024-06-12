import React from 'react'
import { Briefcase,Handshake,FileCode2,Users } from 'lucide-react';
const Banner = () => {
  return (
    <div className="relative h-[350px] w-full py-10 flex justify-center gap-x-20 mt-8 items-center text-white bg-orange-900">
      <div className=" p-6 ">
      <Briefcase size={50} color="#fc3e1d" strokeWidth={1.5} />
        <h5 className="font-bold text-4xl">
          10+
        </h5>
        <h5 className="my-4 text-xl">Years Of Experience</h5>
      </div>

      <div className=" p-6 ">
      <Handshake size={50} color="#fc3e1d" strokeWidth={1.5} />
        <h5 className="font-bold text-4xl">
          5960+
        </h5>
        <h5 className="my-4 text-xl capitalize">Satisfied Clients</h5>
      </div>

      <div className="p-6">
      <FileCode2 size={50} color="#fc3e1d" strokeWidth={1.5} />
        <h5 className="font-bold text-4xl">
          50k
        </h5>
        <h5 className="my-4 text-xl">IT Problems Solved</h5>
      </div>

      <div className="p-6">
      <Users size={50} color="#fc3e1d" strokeWidth={1.5} />
        <h5 className="font-bold text-4xl">
          25k+
        </h5>
        <h5 className="my-4 text-xl">Pro Team Members</h5>
      </div>

    </div>
  )
}

export default Banner;