import React from "react";
import Image from "next/image";
function index() {
  return (
    <div className="p-8">
      <figure class="relative flex items-center rounded-xl p-8 dark:bg-customPeach">
        <Image
          class=" relative w-24 h-24  rounded-full"
          src="/pfp.jpg"
          alt=""
          width="512"
          height="512"
        ></Image>
        <div class="pt-6 p-8 text-left space-y-4">
          <blockquote>
            {/* Add in Description about self, showcasing courseworks and projects done */}
            <p class="text-lg font-medium">
              “Hi! My name is Omm. I am currently a third year Computer Science
              Student, studying at the University of Surrey. I'd like to welcome
              you to my personal portfolio website designed using NextJS. Have a
              look around to see my most recent work!”
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
}

export default index;
