import React from "react";
import ProjectTile from "./ProjectTile";
import ProjectClass from "../components/DRY/ProjectClass";
import SkillClass from "../components/DRY/SkillClass";

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
      const projects = data.items;
      const myArray = [];
      for (let p in projects) {
        const project = new ProjectClass(
          projects[p].id,
          projects[p].Project_Name,
          projects[p].Project_Description
        );
        project.setSkills(projects[p].Skills);
        myArray.push(project);
      }
      return myArray;
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
      const skills = data.items;
      const myArray = [];
      for (let s in skills) {
        const skill = new SkillClass(skills[s].id, skills[s].Skill_Name);
        myArray.push(skill);
      }
      return myArray;
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
    skillsDict.set(skill.id, skill.name);
  });
  const myArray = [];
  for (let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1){
      myArray.push(skillsDict.get(arr[i]));
    } else{
      myArray.push(skillsDict.get(arr[i]) + ', ');
    }
    
  }
  return myArray;
}
function populateSkills(projects) {
  for (let i = 0; i < projects.length; i++) {
    const x = translateKeyListToStringArray(projects[i].skills);
    projects[i].skills = x;
  }
}

export default async function Project() {
  const projects = await getProjects();
  await populateSkills(projects);

  return (
    <div className="p-8">
      My Projects
      <div className="projectTiles">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            title={project.name}
            description={project.description}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}
