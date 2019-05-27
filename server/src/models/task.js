const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'to do'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


// taskSchema.pre('save', async function (next) {
//     console.log('before update task')
//     next()
// })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
