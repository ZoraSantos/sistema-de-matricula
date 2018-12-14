const MatriculaController = require('./controller/matricula-controller');

module.exports = {
    start: (app) => {
        app.get('/matriculas', MatriculaController.listAllMatriculas);
        app.post('/matricula', MatriculaController.createMatricula);
        app.put('/matricula', MatriculaController.updateMatricula);
        app.delete('/matricula', MatriculaController.deleteMatricula);
    }
};
