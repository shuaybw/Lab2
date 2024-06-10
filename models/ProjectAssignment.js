const mongoose = require("mongoose");

const projectAssignmentSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: [true, 'Employee ID is required']
  },
  project_code: {
    type: String,
    required: [true, 'Project code is required']
  },
  start_date: {
    type: Date,
    required: [true, 'Start date is required']
  }
});

module.exports = mongoose.model("ProjectAssignment", projectAssignmentSchema);
