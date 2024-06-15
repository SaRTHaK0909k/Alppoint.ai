import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { HeartPulse, Swords } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { Scale } from "lucide-react";
import Banner from "@/components/Banner";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center mt-10 " >
      {/* Existing Flexbox */}
      <div className="flex flex-col lg:flex-row">
        {/* Left side with text content */}
        <div className="w-full lg:w-1/3 p-4 m-auto pl-8">
          <h1 className="text-5xl">
            <span className="text-orange-600">Know About </span>
            <span className="gradient-text">Us</span>
          </h1>
          <p className="mt-5">
            Collaboratively administrate empowered markets plug and play
            networks dynamically procrastinated
          </p>
        </div>
        {/* Right side with image */}
        <div className="w-full lg:w-2/3 p-4">
          <Image
            src="/aboutus1.png"
            alt="Image Alt Text"
            className="w-full h-auto"
            height={500}
            width={800}
          />
        </div>
      </div>
      {/* Centered div */}
      <div className="w-full p-4 text-center p-8">
        <h2 className="text-3xl mt-10 mb-4">
          <span className="gradient-text">Our </span>
          <span className="text-orange-600">Story</span>
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          commodo scelerisque sit velit non. Consectetur cum odio facilisis
        </p>
        <div className="flex justify-center items-center m-auto flex-wrap gap-4 lg:gap-8">
          <Image
            src="/aboutus_flex1.png"
            alt="Image 1"
            className="w-full lg:w-1/3 h-auto m-2"
            height={200}
            width={300}
          />
          <Image
            src="/aboutus_flex2.png"
            alt="Image 2"
            className="w-full lg:w-1/3 h-auto m-2"
            height={200}
            width={300}
          />
          <Image
            src="/aboutus_flex3.png"
            alt="Image 3"
            className="w-full lg:w-1/3 h-auto m-2"
            height={200}
            width={300}
          />
        </div>
      </div>
      {/* New section */}
      <div className="flex flex-col-reverse lg:flex-row w-full mt-10">
        {/* Left side with image */}
        <div className="w-full lg:w-1/2 pl-8">
          <Image
            src="/aboutus_flex4.png"
            alt="Bottom Image"
            className="w-full h-auto"
            height={400}
            width={600}
          />
        </div>
        {/* Right side with content */}
        <div className="w-full lg:w-1/2 p-4 ">
          <h2 className="text-3xl ">We Care About Your</h2>
          <h2 className="text-3xl mb-8">Business Plan</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            commodo scelerisque sit velit non. Consectetur cum odio facilisis
            nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
            commodo scelerisque sit velit non. Consectetur cum odio facilisis
            nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero.
          </p>
          <div className="mb-4">
            <div className="border border-white p-4 mb-4 flex items-center rounded-md">
              <CircleCheck color="#d25228" strokeWidth={4} />
              <p className="ml-4">
                Our Vision: Capitalize on low hanging fruit to identify a
                ballpark value added activity to beta clickthroughs.
              </p>
            </div>
            <div className="border border-white p-4 mb-4 flex items-center rounded-md">
              <CircleCheck color="#d25228" strokeWidth={4} />
              <p className="ml-4">
                Our Mission: Podcasting operational change management inside of
                workflows to establish a framework.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <Image className="mt-3" src="/parallax.png" height={5000} width={5000} /> */}
      <Banner />

      <div className="flex flex-col lg:flex-row w-full mt-10 bg-[#201F1F] p-8">
        {/* Left side with content */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl ">What We</h2>
          <h2 className="text-3xl mb-10">Offering Our Values</h2>

          <p className="mb-8">
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
        {/* Right side with images */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="flex flex-col space-y-4">
            <div className="rectangle bg-[#2F2925] text-white p-4 rounded-md shadow-lg">
              <Scale size={48} color="#d25228" strokeWidth={1.75} />
              <h2 className="text-xl mb-2 mt-2">Consultation</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at commodo scelerisque sit velit non. Consectetur cum odio
                facilisis nisi. Aliquet tortor tortor, nunc et, tincidunt et
                porttitor libero.
              </p>
            </div>
            <div className="rectangle bg-[#2F2925] text-white p-4 rounded-md shadow-lg">
              <LockKeyhole size={48} color="#d25228" strokeWidth={1.75} />
              <h2 className="text-xl mb-2 mt-2">Protecting Your Business</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at commodo scelerisque sit velit non. Consectetur cum odio
                facilisis nisi. Aliquet tortor tortor, nunc et, tincidunt et
                porttitor libero.
              </p>
            </div>
            <div className="rectangle bg-[#2F2925] text-white p-4 rounded-md shadow-lg">
              <HeartPulse size={48} color="#d25228" strokeWidth={1.75} />
              <h2 className="text-xl mb-2 mt-2">Make Appointment</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at commodo scelerisque sit velit non. Consectetur cum odio
                facilisis nisi. Aliquet tortor tortor, nunc et, tincidunt et
                porttitor libero.
              </p>
            </div>
            <div className="rectangle bg-[#2F2925] text-white p-4 rounded-md shadow-lg">
              <Swords size={48} color="#d25228" strokeWidth={1.75} />
              <h2 className="text-xl mb-2 mt-2">Enjoy the Service</h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at commodo scelerisque sit velit non. Consectetur cum odio
                facilisis nisi. Aliquet tortor tortor, nunc et, tincidunt et
                porttitor libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
