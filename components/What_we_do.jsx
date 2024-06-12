import React from "react";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import styles from "./What_we_do.module.css";
import Appointment from "./Appointment";
import App from "next/app";
const What_we_do = () => {
  return (
    <div className="p-6 md:p-12 bg-black text-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        What We Do
      </h1>
      <p className="text-lg md:text-xl leading-relaxed text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        fugiat earum eaque optio in nam distinctio hic, aperiam magnam laborum
        similique maiores commodi rem saepe placeat harum dolor deserunt
        explicabo deleniti laudantium perferendis ea ipsam, animi mollitia.
        Alias maxime quod esse! Totam, deleniti! Perspiciatis eveniet nobis
        labore et nesciunt, ipsam quisquam distinctio nisi dolorem enim neque
        unde. Deserunt nemo iusto eveniet impedit earum, minus, dolor provident
        est ullam eum hic, dolorem vero sit porro. A recusandae reprehenderit
        sunt itaque at molestiae minima laboriosam facilis perferendis placeat
        error corporis porro ducimus voluptas quod, provident molestias esse
        voluptatibus aliquam culpa eius rerum!
      </p>
      <Zoom>
        <div className="flex justify-center items-center mt-5">
          <Image src="/whatwedo.png" width={1000} height={1000} />
        </div>
      </Zoom>
      <hr className="my-20 border-gray-300" />{" "}
      {/* Add a horizontal line with margin */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              AI Consulting and Strategy
            </h2>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Navigate AIs complexities with a strategic compass, transforming
              vision into value
            </h1>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-20 border-gray-300" />{" "}
      {/* Add a horizontal line with margin */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              AI Software Development
            </h2>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Elevate your operations with bespoke AI-driven software solutions.
            </h1>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-20 border-gray-300" /> {/* Additional hr tag */}
      {/* Add a horizontal line with margin */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              Data and Machine Learning Engineering
            </h2>
            <h1 className="text-4xl font-bold mb-4 text-white">
              Transform your data into actionable insights with tailored machine
              learning techniques.
            </h1>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-4 bg-orange-700 text-white p-4 rounded-lg relative pl-8">
              <span className="absolute h-4 w-4 bg-black rounded-lg left-2 top-1/2 transform -translate-y-1/2"></span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-20 border-gray-300" /> {/* Additional hr tag */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl mb-6 uppercase">
              Why Companies Work with Us
            </h1>
            <p className="mb-6 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Est,
              veritatis.
            </p>
            <ul className={`${styles["list-square-orange"]} mb-8`}>
              <li className="mb-4">
                Development of your product as an end-to-end solution, outsource
                / outstaff / in-house cooperation
              </li>
              <li className="mb-4">
                Development of your product as an end-to-end solution, outsource
                / outstaff / in-house cooperation
              </li>
              <li className="mb-4">
                Development of your product as an end-to-end solution, outsource
                / outstaff / in-house cooperation
              </li>
              <li className="mb-4">
                Development of your product as an end-to-end solution, outsource
                / outstaff / in-house cooperation
              </li>
            </ul>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mb-8">
              Discuss Your Project
            </button>
          </div>

          <div
            className="relative text-center md:text-left justify-center flex items-center"
            style={{
              position: "relative",
            }}
          >
            <Image
              src="/orange-circle-1462825_1920.png"
              height={500}
              width={500}
              alt="Image"
              className="w-64 h-64 object-cover rounded-lg"
            />
            <div className="absolute z-10 text-white font-bold text-4xl">
              <p className="text-center items-center">98%</p>
              <p className="text-xs mt-2 uppercase">High Performance</p>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "3px",
                backgroundColor: "white",
                zIndex: 5,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "50%",
                height: "3px",
                backgroundColor: "white",
                zIndex: 5,
              }}
            ></div>
          </div>
        </div>
      </div>
       

               <hr className="my-20 border-gray-300" /> 
              


              {/* Recent Blogs sections to be worked on */}


             
<div className="">
  <div className="text-center text-3xl uppercase">Frequently Asked Questions</div>
</div>
<div className="container mx-auto px-4 mt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 1</h3>
      <p className="mb-4">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minus! ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 2</h3>
      <p className="mb-4">Ut Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nostrum. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 3</h3>
      <p className="mb-4">Duis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusantium! aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 4</h3>
      <p className="mb-4">Excepteur  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, est?sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 5</h3>
      <p className="mb-4">Sed ut  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, illum!perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 text-orange-600">Question 6</h3>
      <p className="mb-4">Nemo  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sunt provident dolorum molestias reprehenderit sit!enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    </div>
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="h-full w-px bg-gray-300"></div>
    </div>
  </div>
</div>
<hr className="my-20 border-gray-300" />


            
              <Appointment/>

    </div>
  );
};

export default What_we_do;
