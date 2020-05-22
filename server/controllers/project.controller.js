const { Project } = require('../models/project.model');

// Create a new Project -------
module.exports.createProject = (request, response) => {
    const { name, dueDate, status } = request.body;
    Project.create({
        name,
        dueDate,
        status
    })
        .then(project => response.json(project))
        .catch(err => response.status(400).json(err));
};

// Read all Projects -----------
module.exports.findAllProjects = (req, res) => {
    Project.find()
        .then(allProjects => res.json({ projects: allProjects }))
        .catch(err => res.json({message: "Something went wrong", error: err}));
};

// Read one Project -------------
module.exports.getProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then(project => res.json(project))
        .catch(err => res.status(400).json(err));
}

// Update one Project ----------
module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true, context:'query'})
        .then(updatedProject => res.json(updatedProject))
        .catch(err => res.status(400).json(err))
}

// Delete one Project ----------
module.exports.deleteProject = (req, res) => {
    Project.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}