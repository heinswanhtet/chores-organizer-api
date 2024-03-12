const Chore = require('../models/Chore')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-errors')

const getAllChores = asyncWrapper(async (req, res) => {
    const chores = await Chore.find({})
    res.status(200).json({ chores })
})

const createChore = asyncWrapper(async (req, res, next) => {
    const getChore = await Chore.findOne({ title: req.body.title })
    if (getChore) {
        return next(createCustomError(`title: <${req.body.title}> already exists`, 400))
    }
    const chore = await Chore.create(req.body)
    res.status(201).json({ chore })
})

const getSingleChore = asyncWrapper(async (req, res, next) => {
    const { id: choreID } = req.params
    const chore = await Chore.findOne({ _id: choreID })
    if (!chore) {
        return next(createCustomError(`Not found with chore id: ${choreID}`, 404))
    }
    res.status(200).json({ chore })
})

const updateChore = asyncWrapper(async (req, res, next) => {
    const { id: choreID } = req.params
    const chore = await Chore.findOneAndUpdate(
        { _id: choreID },
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
    if (!chore) {
        return next(createCustomError(`Not found with chore id: ${choreID}`, 404))
    }
    res.status(200).json({ chore })
})

const deleteChore = asyncWrapper(async (req, res, next) => {
    const { id: choreID } = req.params
    const chore = await Chore.findOneAndDelete({ _id: choreID })
    if (!chore) {
        return next(createCustomError(`Not found with chore id: ${choreID}`, 404))
    }
    res.status(200).json({ chore })
})

module.exports = {
    getAllChores,
    createChore,
    getSingleChore,
    updateChore,
    deleteChore
}