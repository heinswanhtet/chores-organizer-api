const express = require('express')
const router = express.Router()
const {
    getAllChores,
    createChore,
    getSingleChore,
    updateChore,
    deleteChore
} = require('../controllers/chores')

router.route('/').get(getAllChores).post(createChore)
router.route('/:id').get(getSingleChore).patch(updateChore).delete(deleteChore)

module.exports = router