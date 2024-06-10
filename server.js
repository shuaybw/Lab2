const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));


// Database connection
mongoose.connect(
  "mongodb+srv://shuaybwarsame0008:123@shuaybdb.ffgp5xy.mongodb.net/"
);

// Import routes
const employeeRoutes = require("./routes/employeeRoutes");
const projectRoutes = require("./routes/projectRoutes");
const projectAssignmentRoutes = require("./routes/projectAssignmentRoutes");

// Use routes
app.use("/api/employees", employeeRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/project_assignments", projectAssignmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
