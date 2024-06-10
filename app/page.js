'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero_section from "@/components/Hero_section";
import What_we_do from "@/components/What_we_do";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero_section/>
      <What_we_do/>
    </>
  );
}
