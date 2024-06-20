import React from "react";

const Skills = () => {
  const arr = [
    "Java",
    "Python",
    "C",
    "C++ / Cuda",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Django",
    "React",
    "NextJS",
    "PyTorch",
  ];
  return (
    <div class="">
      <figure class="relative flex items-center rounded-xl py-2 px-4 dark:bg-customPeach mx-auto">
        <div class="text-lg font-medium">
          <h1>My Current Skill Set:</h1>
          <div class="flex flex-wrap gap-x-2 gap-y-2 text-center ">
            {arr.map((arr, i) => (
              <div key={i} className="skill">
                {arr}
              </div>
            ))}
          </div>
        </div>
      </figure>
    </div>
  );
};
export default Skills;
