const { getAllSkillDB, createSkillDB } = require('../repository/skill.repository');

async function getAllSkill() {
    const data = await getAllSkillDB();
    return data;
};

async function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
};

module.exports = { getAllSkill, createSkill };