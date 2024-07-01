import React from "react";

const SkillTile = ({ id, name }) => {
  return (
    <>
      <div key={id} className="skill">
        {name}
      </div>
    </>
  );
};

export default SkillTile;
