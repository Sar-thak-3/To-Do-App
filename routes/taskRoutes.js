const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/:id' , taskController.homePage);

router.post('/:id' , taskController.addTask);

router.put('/:id' , taskController.deleteTask);

module.exports = router;