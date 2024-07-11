import React from "react";
import ProjectTile from "./ProjectTile";
import ProjectClass from "../components/DRY/ProjectClass";

import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "sample_data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const myArray = [];
  for (let i = 0; i < data.projects.length; i++) {
    const name = data.projects[i].Project_Name;
    const desc = data.projects[i].Project_Description;
    const skills = data.projects[i].Skills;
    const ProjectObject = new ProjectClass(i + 1, name, desc);
    ProjectObject.setSkills(skills);
    myArray.push(ProjectObject);
  }
  return myArray;
}

export default async function Project() {
  const projectsArray = await getStaticProps();
  return (
    <div className="p-8">
      My Projects
      <div className="projectTiles">
        {projectsArray.map((project) => (
          <ProjectTile
            key={project.id}
            title={project.name}
            description={project.description}
            skills={project.skills.join(", ")}
          />
        ))}
      </div>
    </div>
  );
}
