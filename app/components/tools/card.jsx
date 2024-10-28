"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ tool }) => {
  const router = useRouter();
  return (
    <div>
      <div className="shadow-white rounded-md shadow-md overflow-hidden p-4 max-w-sm">
        <img
          className="w-full aspect-[2/1] object-contain"
          src={tool.image || "/image/textCC.png"}
          alt="Info card image"
        />
        <div className="px-6 py-4">
          <h2
            className="text-lg font-bold leading-tight cursor-pointer"
            onClick={() => tool.link&&router.push(tool.link)}
          >
            {tool.name}
          </h2>
          <p className="mt-2 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
