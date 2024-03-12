const Chore = require('../models/Chore')

const getAllChores = (req, res) => {
    res.send('get all chores')
}

const createChore = async (req, res) => {
    try {
        const chore = await Chore.create(req.body)
        res.status(201).json({ chore })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleChore = (req, res) => {
    res.send(`get a single chore: ${req.params.id}`)
}

const updateChore = (req, res) => {
    res.send(`update a chore: ${req.body.name}, ${req.params.id}`)
}

const deleteChore = (req, res) => {
    res.send(`delete a chore: ${req.params.id}`)
}

module.exports = {
    getAllChores,
    createChore,
    getSingleChore,
    updateChore,
    deleteChore
}