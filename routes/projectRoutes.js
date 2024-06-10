const express = require('express');
const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
}));

module.exports = router;
