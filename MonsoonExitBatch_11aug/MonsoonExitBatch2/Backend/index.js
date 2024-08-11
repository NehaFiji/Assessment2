const express = require("express");
const cors = require("cors");
const Employee = require("./model");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
require("./connection");

// POST API to add employee data
app.post("/add", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send({ message: "Employee added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to add employee" });
  }
});

// GET API to retrieve all employee data
app.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to retrieve employees" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
