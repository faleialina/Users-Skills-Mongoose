const { createUserDB, updateUserDB, getAllUserDB, getUserByIdDB, deleteUserDB } = require('../repository/user.repository')

async function getAllUser() {
    const data = await getAllUserDB();
    return data;
}
async function getUserById(_id) {
    const data = await getUserByIdDB(_id);
    return data;
}
async function createUser(user) {
    const data = await createUserDB(user);
    return data;
}
async function updateUser(_id, user) {
    const data = await updateUserDB(_id, user);
    return data;
}
async function deleteUser(_id) {
    const data = await deleteUserDB(_id);
    return data;
}

module.exports = { createUser, updateUser, getAllUser, getUserById, deleteUser };