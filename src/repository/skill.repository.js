const { TableSkill } = require('../db');

async function getAllSkillDB() {
    const data = await TableSkill.find();
    return data;
};

async function createSkillDB(skill) {
    await TableSkill.create(skill);
    const data = await TableSkill.find();
    return data;
}

module.exports = { getAllSkillDB, createSkillDB }