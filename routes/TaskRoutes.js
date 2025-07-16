import express from 'express';
import TaskController from '../controllers/TaskController.js';

const taskRouter = express.Router();

taskRouter.get('/', TaskController.showTasks);
taskRouter.get('/add', TaskController.createTask);

export default taskRouter;
