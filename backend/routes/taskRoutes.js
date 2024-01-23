const express = require("express");
const Task = require("../models/taskModel");
const { model } = require("mongoose");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

// Above 2 routes are equal to these 5 routes

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
