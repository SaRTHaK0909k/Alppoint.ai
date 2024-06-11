import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src="/contact.png"
          layout="responsive"
          width={1920}
          height={1080}
          alt="img"
        />
        <div className="absolute text-4xl bottom-8 w-full bg-opacity-50 text-white text-center py-4">
          Contact Us
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-black">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl  mb-4 text-orange-600">
            Say Hello To Peter
          </h2>
          <p className="text-md text-white">
            There are of Lorem Ipsum available, but the majority have su
            alteration in some form, by injected oir which don't look even
            slightly believable.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-between items-center text-white space-x-8">
          <div className="flex items-center space-x-2">
            <Phone color="#ed4c07" />
            <div className="text-lg">
              <p className="font-bold">Call Us On:</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail color="#ed4c07" />
            <div className="text-lg">
              <p className="font-bold">Email Us:</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
