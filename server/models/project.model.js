const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Project name required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    dueDate: {
        type: Date,
        required: [true, "Due date required"]
    },
    status: {
        type: String
    }
}, {timestamps: true});

module.exports.Project = mongoose.model('Project', ProjectSchema);