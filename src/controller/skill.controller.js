const express = require('express');
const { getAllSkill, createSkill, getSkillById, updateSkill, deleteSkill } = require('../service/skill.service');
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
        const data = await getSkillById(req.params._id);
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
});

route.put('/:_id', async (req, res) => {
    try {
        const data = await updateSkill(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    };
});

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteSkill(req.params._id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    };
});

module.exports = route;