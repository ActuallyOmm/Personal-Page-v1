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

        <div className="grid grid-flow-row grid-cols-2 auto-cols-auto justify-center xs:gap-10 md:gap-15 xs:grid-cols-1 md:grid-cols-2 ">
          <Description></Description>
          <ProjectRota></ProjectRota>
        </div>
      </div>
    </>
  );
}

export default index;
