import { raw } from 'express';
import Task from '../models/Task.js';

class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  static async createTaskSave(req, res) {
    const { title, description } = req.body;
    const task = { title, description, done: false };
    await Task.create(task);
    res.redirect('tasks');
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    console.log(tasks);
    res.render('tasks/all', { tasks });
  }

  static async showTask(req, res) {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id }, raw: true });
    console.log(task);
    res.render('tasks/task', task);
  }
}

export default TaskController;
