import React from "react";
import ProjectTile from "./ProjectTile";

async function getProjects() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/projects/records",
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

async function getSpecificProject(x) {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/projects/records/" + "x" + ")",
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
async function translateKeyListToStringArray(arr) {
  const skills = await getSkills();
  const skillsDict = new Map();
  skills.forEach((skill) => {
    skillsDict.set(skill.id, skill.Skill_Name);
  });
  const myArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      myArray.push(skillsDict.get(arr[i]));
    } else {
      myArray.push(skillsDict.get(arr[i]) + ", ");
    }
  }
  return myArray;
}
function getLanguageDict(projects) {
  // Creates a Map
  // Key: Project_Name
  // Values: An array of strings (Skill Names)
  const myDictionary = new Map();
  for (let i = 0; i < projects.length; i++) {
    myDictionary.set(
      projects[i].Project_Name,
      translateKeyListToStringArray(projects[i].Language)
    );
  }
  return myDictionary;
}

export default async function Project() {
  const projects = await getProjects();
  const skills = await getLanguageDict(projects);

  return (
    <div className="p-8">
      My Projects
      <div className="projectTiles">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            title={project.Project_Name}
            description={project.Project_Description}
            language={skills.get(project.Project_Name)}
          />
        ))}
      </div>
    </div>
  );
}
