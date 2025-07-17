import Task from '../models/Task.js';

class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }

  // CREATE
  static async createTaskSave(req, res) {
    const { title, description } = req.body;
    const task = { title, description, done: false };
    await Task.create(task);
    res.redirect('/tasks');
  }

  // READ
  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render('tasks/all', { tasks });
  }

  static async showTask(req, res) {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id }, raw: true });
    res.render('tasks/task', task);
  }

  static async editTask(req, res) {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id }, raw: true });
    res.render('tasks/edit', task);
  }

  // UPDATE
  static async editTaskPost(req, res) {
    const { id, title, description } = req.body;
    await Task.update({ title, description }, { where: { id } });
    res.redirect('/tasks');
  }

  static async updateTaskStatus(req, res) {
    const { id } = req.body;
    const task = {
      done: req.body.done === '0' ? true : false,
    };
    await Task.update(task, { where: { id } });
    res.redirect('/tasks');
  }

  // DELETE
  static async deleteTask(req, res) {
    const { id } = req.body;
    console.log(id);

    await Task.destroy({ where: { id } });
    res.redirect('/tasks');
  }
}

export default TaskController;
