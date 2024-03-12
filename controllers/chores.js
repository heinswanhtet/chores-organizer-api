const getAllChores = (req, res) => {
    res.send('get all chores')
}

const createChore = (req, res) => {
    res.send(`create chores: ${req.body.name}`)
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