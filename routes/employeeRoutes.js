const express = require('express');
const asyncHandler = require('express-async-handler');
const Employee = require('../models/Employee');

const router = express.Router();

router.post("/", asyncHandler(async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).send(employee);
}));

module.exports = router;
