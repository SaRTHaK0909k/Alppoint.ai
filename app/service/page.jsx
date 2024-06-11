'use client'
import React from "react";
import Image from "next/image";
import { BriefcaseBusiness,Building2,Car,Users } from "lucide-react";
import Appointment from "@/components/Appointment";
const Page = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex w-full">
        {/* Left side with text content */}
        <div className="w-1/3 p-4 m-auto pl-8">
          <h1 className="text-5xl">
            <span className="text-orange-600">We’re </span>
            <span className="gradient-text">Offering</span>
          </h1>
          <p className="mt-5">
            Collaboratively administrate empowered markets plug and play
            networks dynamically procrastinated
          </p>
        </div>
        {/* Right side with image */}
        <div className="flex-grow">
          <Image
            src="/service1.png"
            alt="Image Alt Text"
            className="w-full h-auto"
            height={500}
            width={800}
          />
        </div>
      </div>
      {/* New section with two parts */}
      <div className="flex w-full mt-10 p-8">
        {/* Left side with two headings */}
        <div className="w-1/2 p-4 pr-8 border-r border-gray-400">
        <h2 className="text-5xl">
            <span className="text-orange-600">Explore </span>
            <br  />
            <span className="gradient-text">Our Service Area</span>
          </h2>
        </div>
        {/* Right side with paragraphs */}
        <div className="w-1/2 p-8">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            commodo scelerisque sit velit non. Consectetur cum odio facilisis
            nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero.
          </p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            commodo scelerisque sit velit non. Consectetur cum odio facilisis
            nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero.
          </p>
        </div>
      </div>
      {/* Three rectangles side by side */}
      <div className="flex w-full mt-10 p-8">
        <div className="w-1/3 border border-orange-500   p-10 mr-2">
          <h3 className="text-xl mb-2">Rectangle 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <BriefcaseBusiness className="mt-5"size={48} color="#d25228" strokeWidth={1.75} />
        </div>
        <div className="w-1/3 border border-orange-500 p-10 mr-2">
          <h3 className="text-xl mb-2">Rectangle 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <Building2 className="mt-5"size={48} color="#d25228" strokeWidth={1.75} />
        </div>
        <div className="w-1/3 border border-orange-500   p-10">
          <h3 className="text-xl mb-2">Rectangle 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <Car className="mt-5"size={52} color="#d25228" strokeWidth={1.75} />
        </div>
      </div>


      <div className="flex w-full  p-8">
        <div className="w-1/3 border border-orange-500   p-10 mr-2">
          <h3 className="text-xl mb-2">Rectangle 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <BriefcaseBusiness className="mt-5"size={48} color="#d25228" strokeWidth={1.75} />
        </div>
        <div className="w-1/3 border border-orange-500  p-10 mr-2">
          <h3 className="text-xl mb-2">Rectangle 5</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <Building2 className="mt-5"size={48} color="#d25228" strokeWidth={1.75} />
        </div>
        <div className="w-1/3 border border-orange-500   p-10">
          <h3 className="text-xl mb-2">Rectangle 6</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, exercitationem.elit.</p>
          <Users className="mt-5" size={48} color="#d25228" strokeWidth={1.75} />
        </div>
      </div>
      <Image className="mt-3 mb-12" src="/parallax.png" height={5000} width={5000} />

      <Appointment/>
    </div>
  );
};

export default Page;
