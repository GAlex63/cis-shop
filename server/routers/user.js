const express = require('express')
const { getRoles, getUsers, updateUser, deleteUser } = require('../controllers/user')
const authenticated = require('../middleware/authenticated')
const mapUser = require('../helpers/mapUser')
const ROLES = require("../constants/role")
const hasRole = require('../middleware/hasRole')


const router = express.Router({ mergeParams: true })

router.get('/users/roles', async (req, res) => {
    const roles = getRoles()

    res.send({ data: roles })
})

router.get('/users', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const users = await getUsers()

    res.send({ data: users.map(mapUser) })
})

router.patch('/users/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    const newUser = await updateUser(req.params.id, {
        role_id: req.body.roleId
    })
    res.send({ data: mapUser(newUser) })
})

router.delete('/users/:id', authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteUser(req.params.id)

    res.send({ message: "Позьзователь удален", error: null })
})


module.exports = router;