import React from "react";
import SkillTile from "./SkillTile";
import fs from "fs";
import path from "path";
import SkillClass from "@/app/components/DRY/SkillClass";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "sample_data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const myArray = [];
  for (let i = 0; i < data.Skills.length; i++) {
    const name = data.Skills[i].SkillName;
    const skillObject = new SkillClass(i + 1, name);
    myArray.push(skillObject);
  }
  return myArray;
}

export default async function Skills() {
  // Array for adding in Skills
  const arr = await getStaticProps();
  //console.log(arr);
  return (
    <div className="">
      <figure className="relative flex items-center rounded-xl py-2 px-4 dark:bg-customPeach mx-auto">
        <div className="text-lg font-medium">
          <h1>My Current Skill Set:</h1>
          <div className="flex flex-wrap gap-x-2 gap-y-2 text-center ">
            {arr.map((e) => (
              <SkillTile key={e.id} name={e.name} />
            ))}
          </div>
        </div>
      </figure>
    </div>
  );
}
