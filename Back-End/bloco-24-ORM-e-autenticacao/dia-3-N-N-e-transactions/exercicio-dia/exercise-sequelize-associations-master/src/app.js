const express = require('express');
const patientController = require('./controllers/patientController');

const app = express();
app.use(express.json());

app.get('/patients/plans', patientController.getAllAndPlans);

app.get('/patients/surgeries', patientController.getAllAndSurgeries);

app.get('/patients/surgeries/nmedic', patientController.getAllAndSurgeriesRestrict);

app.get('/surgery/doctor', patientController.surgeryByDoctor);

app.get('/plans/:id', patientController.getPlanUsers);

app.post('/patients', patientController.insert);

module.exports = app;