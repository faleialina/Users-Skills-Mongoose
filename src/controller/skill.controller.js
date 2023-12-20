const express = require('express');
const { getAllSkill, createSkill, getSkillById } = require('../service/skill.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllSkill();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
});
route.get('/:_id', async (req, res) => {
    try {
        const data = await getSkillById(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
})

route.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
})

module.exports = route;