"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={"/image-logo.jpg"}
              alt="identifier-logo"
              height={40}
              width={40}
              className="mr-3"
            />

            <h1 className="text-2xl font-bold text-blue-600">V I P</h1>
          </div>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
                  href={"#"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
                  href={"#how-it-works"}
                >
                  How it works
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-600 hover:text-blue-600 transition duration-150 ease-in-out"
                  href={"#features"}
                >
                  featureseatures
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
