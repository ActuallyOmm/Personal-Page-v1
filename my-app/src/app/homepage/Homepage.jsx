import React from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills/Skills";
import Description from "./components/Description";
import ProjectRota from "./components/ProjectRota";

function index() {
  return (
    <>
      <div className="xs:p-8">
        <Introduction></Introduction>
        <br></br>
        <Skills></Skills>
        <br></br>
        <div className="flex justify-center xs:gap-10 md:gap-20 xs:flex-wrap md:flex-nowrap">
          <Description></Description>
          <ProjectRota></ProjectRota>
        </div>

        <br></br>
      </div>
    </>
  );
}

export default index;
