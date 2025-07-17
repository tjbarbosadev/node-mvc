import express from 'express';
import TaskController from '../controllers/TaskController.js';

const taskRouter = express.Router();

taskRouter.get('/add', TaskController.createTask);
taskRouter.post('/add', TaskController.createTaskSave);

taskRouter.get('/:id', TaskController.showTask);
taskRouter.get('/edit/:id', TaskController.editTask);

taskRouter.post('/edit', TaskController.editTaskPost);
taskRouter.post('/updatestatus', TaskController.updateTaskStatus);

taskRouter.post('/remove', TaskController.deleteTask);

taskRouter.get('/', TaskController.showTasks);

export default taskRouter;
