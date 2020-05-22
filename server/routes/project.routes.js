const ProjectController = require('../controllers/project.controller');
module.exports = function(app){
    app.get('/api/projects', ProjectController.findAllProjects);
    app.post('/api/project/new', ProjectController.createProject);
    app.get('/api/project/:id', ProjectController.getProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);
}


