import React from 'react';
import { Briefcase, Handshake, FileCode2, Users } from 'lucide-react';

const Banner = () => {
  return (
    <div className="w-full bg-orange-900 py-10 mt-8 text-white">
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 sm:gap-y-16 md:gap-y-20 lg:gap-y-24 xl:gap-y-28 items-center">
        <div className="flex flex-col items-center p-6">
          <Briefcase size={50} color="#FFFFFF" strokeWidth={1.5} className="mb-4 sm:mb-6 md:mb-8" />
          <h5 className="font-bold text-3xl sm:text-4xl">10+</h5>
          <h5 className="my-2 text-lg sm:my-4 sm:text-xl">Years Of Experience</h5>
        </div>

        <div className="flex flex-col items-center p-6">
          <Handshake size={50} color="#fc3e1d" strokeWidth={1.5} className="mb-4 sm:mb-6 md:mb-8" />
          <h5 className="font-bold text-3xl sm:text-4xl">5960+</h5>
          <h5 className="my-2 text-lg sm:my-4 sm:text-xl capitalize">Satisfied Clients</h5>
        </div>

        <div className="flex flex-col items-center p-6">
          <FileCode2 size={50} color="#ffffff" strokeWidth={1.5} className="mb-4 sm:mb-6 md:mb-8" />
          <h5 className="font-bold text-3xl sm:text-4xl">50k</h5>
          <h5 className="my-2 text-lg sm:my-4 sm:text-xl">IT Problems Solved</h5>
        </div>

        <div className="flex flex-col items-center p-6">
          <Users size={50} color="#fc3e1d" strokeWidth={1.5} className="mb-4 sm:mb-6 md:mb-8" />
          <h5 className="font-bold text-3xl sm:text-4xl">25k+</h5>
          <h5 className="my-2 text-lg sm:my-4 sm:text-xl">Pro Team Members</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
