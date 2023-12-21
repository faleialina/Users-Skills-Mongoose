const { getAllSkillDB, createSkillDB, getSkillByIdDB, updateSkillDB } = require('../repository/skill.repository');

async function getAllSkill() {
    const data = await getAllSkillDB();
    return data;
};

async function getSkillById(_id) {
    const data = await getSkillByIdDB(_id);
    return data;
};

async function createSkill(skill) {
    const data = await createSkillDB(skill);
    return data;
};

async function updateSkill(_id, skill) {
    const data = await updateSkillDB(_id, skill);
    return data;
}

module.exports = { getAllSkill, createSkill, getSkillById, updateSkill };