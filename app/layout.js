import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbarr from "@/components/Navbarr";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alppoint.ai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          `}
        </style>
      </Head>
      <body className={`${inter.className} font-poppins bg-[#201F1F] `}>
        <Navbarr />
        {children}
        <Footer />
      </body>
    </html>
  );
}
