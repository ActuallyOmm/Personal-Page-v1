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

export default async function Project() {
  const projects = await getProjects();
  return (
    <div class="">
      <div className="projectTiles">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            title={project.Project_Name}
            description={project.Project_Description}
            language={project.Language.Skill_Name}
          />
        ))}
      </div>
    </div>
  );
}
