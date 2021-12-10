const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    projectTitle: { type: String, required: true },
    aboutProject: { type: String, required: true },
    projectDeadline: { type: String, required: true },
    link: { type: String, required: true },
    submittedData: { type: Array, default: [], required: false },
  },
  { collection: "Projects" }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
