const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'Server up and running!' }));

app.get('/myActivities', (_req, res) => res.status(200).json(activities))

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activityById = activities.find((activity) => activity.id === Number(id));
  res.status(200).json(activityById);
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const activitiesByStatus = activities.filter((activity) => activity.status === status);
  res.status(200).json(activitiesByStatus);
})

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  const activitiesBySearch = activities.filter((activity) => activity.description.includes(q));
  res.status(200).json(activitiesBySearch);
});


module.exports = app;