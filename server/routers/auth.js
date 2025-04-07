const express = require('express');
const { login, register } = require("../controllers/user")
const mapUser = require("../helpers/mapUser")

const router = express.Router({ mergeParams: true });

router.post('/register', async (req, res) => {
    try {

        const { login, password } = req.body;
        const { user, token } = await register(login, password);
        res.cookie('token', token, { httpOnly: true })
            .send({ error: null, user: mapUser(user) });

    } catch (error) {
        res.status(400).send({ error: error.message || "Unknown error" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { login: userLogin, password } = req.body;
        const { user, token } = await login(userLogin, password);
        res.cookie('token', token, { httpOnly: true });
        res.send({ error: null, user: mapUser(user) });
    } catch (error) {
        res.status(401).send({ error: error.message || "Unknown error" });
    }
});

router.post('/logout', (req, res) => {
    res.cookie('token', '', { httpOnly: true });
    res.send({ message: 'Вы успешно вышли из аккаунта' });
});

module.exports = router

