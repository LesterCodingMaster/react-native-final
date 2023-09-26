// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to your MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/taskDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your Task model schema and create a Task model

const taskSchema = new mongoose.Schema({
  Title: String,
  Completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

// Define your API routes

// GET all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST a new task
app.post("/tasks", async (req, res) => {
  const { Title, Completed } = req.body;
  const task = new Task({ Title, Completed });
  await task.save();
  res.json(task);
});

// PUT (update) a task by ID
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { Title, Completed } = req.body;
  await Task.findByIdAndUpdate(id, { Title, Completed });
  res.send("Task updated");
});

// DELETE a task by ID
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndRemove(id);
  res.send("Task deleted");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
