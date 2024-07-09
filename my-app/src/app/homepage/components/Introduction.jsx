import React from "react";
import Image from "next/image";
const Introduction = () => {
  return (
    <div>
      <div className="relative items-center rounded-xl dark:bg-customPeach mx-auto p-2 sm:w-92 size-auto flex flex-col overflow-hidden auto-cols-auto">
        <Image
          className=" relative w-24 h-24  rounded-full"
          src="/pfp.jpg"
          alt=""
          width="512"
          height="512"
        ></Image>
        <div className="pt-6 p-8 text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Hi! My name is Omm. I am currently a third year Computer Science
              Student, studying at the University of Surrey. I'd like to welcome
              you to my personal portfolio website designed using NextJS. Have a
              look around to see my most recent work! Apologies for any bugs,
              still a work in progress!”
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
