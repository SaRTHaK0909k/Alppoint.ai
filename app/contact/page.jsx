'use client'
import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import ContactSection from "@/components/ContactSection";

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
        <div className="absolute bottom-60 m-auto w-full bg-opacity-50 text-white text-center py-4 bg-black">
          <h1 className="text-4xl">Contact Us</h1>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-gray-900 text-white">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl mb-4">Say Hello To Peter</h2>
          <p className="text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex flex-col md:flex-row items-center justify-center m-auto rounded-xl space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <Phone color="white" />
            <div className="text-lg">
              <p className="font-bold">Call Us On:</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail color="white" />
            <div className="text-lg">
              <p className="font-bold">Email Us:</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
        <ContactSection/>
    </div>
  );
};

export default Page;
