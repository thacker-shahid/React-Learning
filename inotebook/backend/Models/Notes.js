const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        reuired: true,
    },
    tag: {
        type: String,
        default: "general"
    },
    date: {
        trype: Date,
        default: new Date
    }
})

module.exports = mongoose.model('notes', NotesSchema);