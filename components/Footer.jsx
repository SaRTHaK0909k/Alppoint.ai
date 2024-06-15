import React from "react";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* 1st Section */}
          <div className="md:w-3/12 p-4">
            <p className="mb-4">
              Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-orange-600">
                <FaLinkedin size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-orange-600">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-white hover:text-orange-600">
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>

          {/* 2nd Section */}
          <div className="md:w-3/4 p-4 flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl mb-2">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-orange-600">Insurance Planning</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Estate Planning</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Tax Optimization</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Debt Management</Link></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl mb-2">Explore More</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-orange-600">About Us</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Blog</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Site map</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-2">Contact Details</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-orange-600">contact@briofin.com</Link></li>
                <li><Link href="#" className="hover:text-orange-600">+1 (555) 123-4567</Link></li>
                <li><Link href="#" className="hover:text-orange-600">123 Street, City</Link></li>
                <li><Link href="#" className="hover:text-orange-600">Country</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-white my-4" />
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">DSCODE 2023 © All rights reserved</div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-orange-600">Terms & Conditions</Link>
            <Link href="#" className="hover:text-orange-600">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
