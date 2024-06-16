import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="p-4 bg-black ">
      {/* Image with overlay text */}
      <div className="relative w-full mb-8">
        <Image
          src="/computerservices.png"
          layout="responsive"
          width={1920}
          height={1080}
          alt="img"
        />
        <div className="absolute bottom-60 m-auto w-full bg-opacity-50 text-white text-center py-4 bg-black">
          <h1 className="text-4xl">Computer Vision Solutions</h1>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-0.5 w-16 bg-orange-600 mx-2"></div>
          </div>
        </div>
      </div>

      {/* Centered image */}
      <div className="flex items-center justify-center mb-8">
        <Image
          className="p-8"
          src="/services.png"
          width={1000}
          height={200}
          alt="img"
        />
      </div>

      {/* Title, paragraph, and bullet points */}
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-left text-2xl font-bold mb-8">Introduction</h2>
        <p className="text-left text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          commodo scelerisque sit velit non. Consectetur cum odio facilisis
          nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam at commodo
          scelerisque sit velit non. Consectetur cum odio facilisis nisi.
          Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.
        </p>
        <h2 className="text-left text-2xl font-bold mb-8">
          About Computer Vision Solutions
        </h2>
        <p className="text-left text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          commodo scelerisque sit velit non. Consectetur cum odio facilisis
          nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam at commodo
          scelerisque sit velit non. Consectetur cum odio facilisis nisi.
          Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.
        </p>
        <ul className="list-disc list-inside text-left text-lg ml-6 mb-8">
          <li>ContentLorem ipsum dolor sit amet, consectetur</li>
          <li>ContentLorem ipsum dolor sit amet, consectetur</li>
          <li>ContentLorem ipsum dolor sit amet, consectetur</li>
        </ul>

        {/* New Title, Paragraph, and Numbered List */}
        <h2 className="text-left text-2xl font-bold mb-8">
          Make real time an AI services
        </h2>
        <p className="text-left text-lg mb-8">
          m ipsum dolor sit amet, consectetur adipiscing elit. Etiam at commodo
          scelerisque sit velit non. Consectetur cum odio facilisis nisi.
          Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.Lorem
          ipsum
        </p>
        <ol className="list-decimal list-inside text-left text-lg ml-6 mb-8">
          <li>ContentLorem ipsum dolor sit amet, consectetur</li>
          <li>ContentLorem ipsum dolor sit amet, consectetur.</li>
          <li>ContentLorem ipsum dolor sit amet, consectetur.</li>
          <li>ContentLorem ipsum dolor sit amet, consectetur.</li>
        </ol>

        {/* New Title and Paragraph */}
        <h2 className="text-left text-2xl font-bold mb-8">Overview:</h2>
        <p className="text-left text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
          commodo scelerisque sit velit non. Consectetur cum odio facilisis
          nisi. Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam at commodo
          scelerisque sit velit non. Consectetur cum odio facilisis nisi.
          Aliquet tortor tortor, nunc et, tincidunt et porttitor libero
          senectus. Eget massa tellus dictum morbi dui pellentesque varius.
        </p>
      </div>
    </div>
  );
};

export default Page;
