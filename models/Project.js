const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  project_code: {
    type: String,
    unique: true,
    required: [true, 'Project code is required']
  },
  project_name: {
    type: String,
    required: [true, 'Project name is required']
  },
  project_description: {
    type: String,
    required: [true, 'Project description is required']
  }
});

module.exports = mongoose.model("Project", projectSchema);
