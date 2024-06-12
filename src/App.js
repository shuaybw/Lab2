import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/project_assignments"
    );
    const sortedData = response.data.sort((a, b) => a.employee_id - b.employee_id);
    setAssignments(sortedData);
  };

  return (
    <div className="container">
      <h1>Project Assignments</h1>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Project Name</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment._id}>
              <td>{assignment.employee_id}</td>
              <td>{assignment.employee_name}</td>
              <td>{assignment.project_name}</td>
              <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
