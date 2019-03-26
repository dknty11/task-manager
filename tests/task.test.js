const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const { userOne, taskTwo, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'Create first test in task'
        })
        .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.complete).toEqual(false)
})

test('Should fetch all tasks for user one', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should fail when delete other users task', async () => {
    const response = await request(app)
        .delete('/tasks/' + taskTwo._id)
        //.delete(`/tasks/${taskTwo._id}`)
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(taskTwo._id)
    expect(task).not.toBeNull()
})