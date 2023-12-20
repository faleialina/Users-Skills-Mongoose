const express = require('express');
const { getAllSkill, createSkill } = require('../service/skill.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllSkill();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
});

route.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
})

module.exports = route;