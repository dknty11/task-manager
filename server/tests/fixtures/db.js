const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Initial test',
    email: 'test@email.com',
    password: '1234567',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userSecondId = new mongoose.Types.ObjectId()
const userSecond = {
    _id: userSecondId,
    name: 'Ross',
    email: 'vern@enclavea.vn',
    password: 'ab@123cd',
    tokens: {
        token: jwt.sign({ _id: userSecondId }, process.env.JWT_SECRET)
    }
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'first task',
    complete: true,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'second task',
    complete: false,
    owner: userSecond._id
}

const taskThird = {
    _id: new mongoose.Types.ObjectId(),
    description: 'third task',
    complete: false,
    owner: userOne._id
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userSecond).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThird).save()
}

module.exports = {
    userOne,
    userOneId,
    userSecond,
    userSecondId,
    taskOne,
    taskTwo,
    taskThird,
    setupDatabase
}