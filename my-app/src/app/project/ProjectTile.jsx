import React from "react";

const ProjectTile = ({ title, description, language, id }) => {
  return (
    <>
      <div
        key={id}
        className="relative  rounded-xl dark:bg-customPeach mx-auto p-2 w-92 h-60 flex flex-col overflow-hidden auto-cols-auto  "
      >
        <h2 class="text-sm underline font-bold break-words ">{title}</h2>
        <p class="text-xs ">{description}</p>
        <p class="text-xs ">{language}</p>
      </div>
    </>
  );
};

export default ProjectTile;
