const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employee_id: { 
    type: String, 
    unique: true, 
    required: [true, 'Employee ID is required']
  },
  full_name: { 
    type: String,
    required: [true, 'Full name is required']
  },
  email: { 
    type: String,
    required: [true, 'Email is required']
  },
  hashed_password: { 
    type: String,
    required: [true, 'Password is required']
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
