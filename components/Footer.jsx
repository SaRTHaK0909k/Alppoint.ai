import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      {/* 1st Section */}
      <div className="md:w-3/12 p-4">
        <p className="mb-4">
        Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-600">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-orange-600">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="md:w-3/4 p-4 flex justify-between">
        <div>
          <h3 className="text-xl mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-600">Insurance Planning</a></li>
            <li><a href="#" className="hover:text-orange-600">Estate Planning</a></li>
            <li><a href="#" className="hover:text-orange-600">Tax Optimization</a></li>
            <li><a href="#" className="hover:text-orange-600">Debt Management</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Explore More</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-600">About Us</a></li>
            <li><a href="#" className="hover:text-orange-600">Blog</a></li>
            <li><a href="#" className="hover:text-orange-600">Site map</a></li>
            <li><a href="#" className="hover:text-orange-600">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Contact Details</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-600">contact@briofin.com</a></li>
            <li><a href="#" className="hover:text-orange-600">+1 (555) 123-4567</a></li>
            <li><a href="#" className="hover:text-orange-600">123 Street, City</a></li>
            <li><a href="#" className="hover:text-orange-600">Country</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="border-white my-4" />
    <div className="container mx-auto flex justify-between items-center">
      <div>DSCODE 2023 © All rights reserved</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-orange-600">Terms & Conditions</a>
        <a href="#" className="hover:text-orange-600">Privacy Policy</a>
      </div>
    </div>
  </footer>
    </div>

  );
};

export default Footer;
