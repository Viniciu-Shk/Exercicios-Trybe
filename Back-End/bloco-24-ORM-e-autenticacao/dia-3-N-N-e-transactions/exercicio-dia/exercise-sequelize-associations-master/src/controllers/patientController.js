const patientService = require('../services/patientService');

const getAllAndPlans = async (_req, res) => {
  const { type, message } = await patientService.getAllAndPlans();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getAllAndSurgeries = async (_req, res) => {
  const { type, message } = await patientService.getAllAndSurgeries();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const surgeryByDoctor = async (req, res) => {
  const { name } = req.query;
  const { type, message } = await patientService.surgeryByDoctor(name);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getAllAndSurgeriesRestrict = async (_req, res) => {
  const { type, message } = await patientService.getAllAndSurgeriesRestrict();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const getPlanUsers = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await patientService.getPlanUsers(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const insert = async (req, res) => {
  const { type, message } = await patientService.insert(req.body);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAllAndPlans,
  getAllAndSurgeries,
  getPlanUsers,
  insert,
  getAllAndSurgeriesRestrict,
  surgeryByDoctor,
};
