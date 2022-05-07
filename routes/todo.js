const {Router} = require('express')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    res.json({a:1})
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