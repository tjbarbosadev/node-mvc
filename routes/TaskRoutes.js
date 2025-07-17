import express from 'express';
import TaskController from '../controllers/TaskController.js';

const taskRouter = express.Router();

taskRouter.get('/add', TaskController.createTask);
taskRouter.post('/add', TaskController.createTaskSave);

taskRouter.get('/:id', TaskController.showTask);

taskRouter.get('/', TaskController.showTasks);

export default taskRouter;
