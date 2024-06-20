import React from "react";
import Image from "next/image";
const Introduction = () => {
  return (
    <div>
      <figure class="relative flex items-center rounded-xl p-8 dark:bg-customPeach mx-auto">
        <Image
          class=" relative w-24 h-24  rounded-full"
          src="/pfp.jpg"
          alt=""
          width="512"
          height="512"
        ></Image>
        <div class="pt-6 p-8 text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Hi! My name is Omm. I am currently a third year Computer Science
              Student, studying at the University of Surrey. I'd like to welcome
              you to my personal portfolio website designed using NextJS. Have a
              look around to see my most recent work! Apologies for any bugs,
              still a work in progress!”
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
};

export default Introduction;
