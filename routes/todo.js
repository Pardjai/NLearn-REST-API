const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    
})

// Добавление задачи
router.post('/', (req, res) => {

})

// Изменение статуса задачи
router.put('/:id', (req, res) => {

})

// Удаление задачи
router.delete('/:id', (req, res) => {

})

module.exports = router