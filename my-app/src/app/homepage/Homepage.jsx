import React from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Description from "./components/Description";
function index() {
  return (
    <div className="p-8">
      <Introduction></Introduction>
      <br></br>
      <Skills></Skills>
      <br></br>
      <Description></Description>
    </div>
  );
}

export default index;
