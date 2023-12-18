const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/university')

const TableUser = mongoose.model('users', {
    name: String,
    surname: String,
    email: String,
    password: String,
    age: Number
});

const TableSkill = mongoose.model('skill', {
    title: String,
    teacher: String,
    year: Number
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableSkill, TableUser, ObjectId }