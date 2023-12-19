"use client";

import React from "react";

const Error = () => {
  return (
    <main className="mt-20 text-center">
      <h1 className="text-5xl mb-4 font-black color-[#262626] uppercase bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent bg-cover bg-center">
        An error occurred!
      </h1>
      <p className="text-base text-[#ddd8d8]">
        Failed to fetch meal data. Please try again latter!
      </p>
    </main>
  );
};

export default Error;
