const express = require("express");
const Task = require("../models/taskModel");

// Create a Task

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Get all Tasks

const getTasks = async (req, res) => {
  try {
    //find function finds a specific task but no argument will allow it to return all tasks
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Get a single Task

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task with this ${id} is found`);
    }
    res.json(task);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Delete a single Task

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task with this ${id} is found`);
    }
    res.json(`Task Deleted Successfully`);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

// Delete a single Task

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      { _id: id }, // matching the id
      req.body, // updated body
      { new: true, runValidators: true } // entering a new pbject, and whenever we update things usually
      // ignore the validations that are required during the object creation so here we are making
      // it true so it cant be ignored
    );
    if (!task) {
      return res.status(404).json(`No task with this ${id} is found`);
    }
    res.json(`Task Updated Successfully`);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
