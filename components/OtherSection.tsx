"use client";

import React from "react";

const OtherSection = () => {
  return (
    <React.Fragment>
      <section id="how-it-works" className="mt-16 px-5">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Identify Your Image
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {["Upload Image", "AI Analysis", "Get Results"].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step}
              </h3>
              <p className="text-gray-600514479">
                Our advanced AI analyzes your uploaded image and provides
                detailed information about its contents.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mt-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Accurate Identification",
            "Detailed Information",
            "Fast Results",
            "User-Friendly Interface",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {feature}
              </h3>
              <p className="text-gray-600">
                Our image identifier provides quick and accurate results with a
                simple, easy-to-use interface.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Image Identifier. All rights reserved.</p>
          <h2 className="text-base font-semibold mb-2 text-blue-100">
            Developed by:{" "}
            <a href="#" className="decoration-0 ml-1 ">
              <span className="text-blue-400">Crazy Dev John</span>
            </a>
          </h2>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default OtherSection;
