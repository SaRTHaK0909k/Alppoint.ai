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
        <div className="absolute text-4xl bottom-8 w-full bg-opacity-50 text-white text-center py-4 bg-black bg-opacity-50">
          Contact Us
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
          <h2 className="text-3xl mb-4 text-orange-600">Say Hello To Peter</h2>
          <p className="text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="md:w-1/2 p-4 bg-orange-600 items-center justify-center m-auto rounded-xl flex flex-col md:flex-row justify-around items-center">
          <div className="flex items-center space-x-2 my-2 md:my-0">
            <Phone color="white" />
            <div className="text-lg">
              <p className="font-bold">Call Us On:</p>
              <p>+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 my-2 md:my-0">
            <Mail color="white" />
            <div className="text-lg">
              <p className="font-bold">Email Us:</p>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 bg-gray-900 text-white">
        {/* <h2 className="text-3xl mb-6 text-orange-600">Contact Us</h2> */}
        <div className="w-full max-w-5xl bg-[#291910] p-12  rounded-2xl">
          <form className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4 space-y-4">
              <div>
                <label className="block text-md mb-2" htmlFor="name">
                  Your Name Here
                </label>
                <input
                  className="w-full border-none px-3 py-2 border rounded-md  text-white"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="email">
                  Your Mail Here
                </label>
                <input
                  className="w-full px-3  border-none py-2 border rounded-md text-white"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md border-none text-white"
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-md mb-2" htmlFor="service">
                  What Service Do You Want
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md border-none text-white"
                  type="text"
                  id="service"
                  placeholder="Enter the service you want"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4 space-y-4">
              <div>
                <label className="block text-md mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 px-3 py-2 border rounded-md border-none text-white"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
