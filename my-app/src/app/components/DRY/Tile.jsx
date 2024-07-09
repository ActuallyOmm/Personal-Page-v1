import React from "react";
import Image from "next/image";
function Tile({ id, name, description }) {
  return (
    <div className="flex justify-center items-center sm:w-92">
      <div
        key={id}
        className="relative items-center rounded-xl dark:bg-customPeach mx-auto p-2 size-auto flex flex-col "
      >
        <Image
          className="flex justify-center  items-center  w-80 h-80  rounded-full"
          src="/cat.png"
          alt=""
          width="128"
          height="128"
        ></Image>
        <h2 className="projectTitle">{name}</h2>
        <p className="projectDesc ">{description}</p>
        <br></br>
      </div>
    </div>
  );
}

export default Tile;
