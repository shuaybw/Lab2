const express = require('express');
const asyncHandler = require('express-async-handler');
const ProjectAssignment = require('../models/ProjectAssignment');
const Employee = require('../models/Employee');
const Project = require('../models/Project');

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
  const projectAssignment = new ProjectAssignment(req.body);
  await projectAssignment.save();
  res.status(201).send(projectAssignment);
}));

router.get("/", asyncHandler(async (req, res) => {
  const assignments = await ProjectAssignment.find()
    .limit(5)
    .sort({ start_date: -1 });

  const detailedAssignments = await Promise.all(
    assignments.map(async (assignment) => {
      const employee = await Employee.findOne({
        employee_id: assignment.employee_id,
      }).select("full_name");
      const project = await Project.findOne({
        project_code: assignment.project_code,
      }).select("project_name");

      return {
        ...assignment.toObject(),
        employee_name: employee ? employee.full_name : "Unknown",
        project_name: project ? project.project_name : "Unknown",
      };
    })
  );

  res.status(200).send(detailedAssignments);
}));

module.exports = router;
