import React from "react";
import SkillTile from "./SkillTile";
async function getSkills() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/Skills/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
  } else {
    if (data.items && Array.isArray(data.items)) {
      return data.items;
    } else {
      // If you can't find an array, return an empty array or handle accordingly
      return [];
    }
  }
}
export default async function Skills() {
  // Array for adding in Skills
  const arr = await getSkills();
  //console.log(arr);
  return (
    <div class="">
      <figure class="relative flex items-center rounded-xl py-2 px-4 dark:bg-customPeach mx-auto">
        <div class="text-lg font-medium">
          <h1>My Current Skill Set:</h1>
          <div class="flex flex-wrap gap-x-2 gap-y-2 text-center ">
            {arr.map((e) => (
              <SkillTile key={e.id} name={e.Skill_Name} />
            ))}
          </div>
        </div>
      </figure>
    </div>
  );
}
