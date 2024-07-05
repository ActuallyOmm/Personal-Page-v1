class ProjectClass {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.skills = new Array();
  }
  setSkills(skills) {
    this.skills = skills;
  }
}
export default ProjectClass;
