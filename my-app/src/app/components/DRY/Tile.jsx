import React from "react";
import Image from "next/image";
function Tile({ id, name, description }) {
  return (
    <div className="flex justify-center items-center w-92 max-h-96 bg-gray-200">
      <div
        key={id}
        className="flex flex-col items-center justify-center w-full h-full rounded-xl dark:bg-customPeach p-2"
      >
        <Image
          className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"
          src="/cat.png"
          alt=""
          width="128"
          height="128"
        />
        <h2 className="projectTitle">{name}</h2>
        <p className="projectDesc">{description}</p>
      </div>
    </div>
  );
}

export default Tile;
