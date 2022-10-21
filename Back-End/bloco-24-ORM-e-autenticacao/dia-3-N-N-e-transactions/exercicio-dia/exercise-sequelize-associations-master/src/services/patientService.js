const { Patient, Plan, Surgery } = require('../models');

const error = 'Something went wrong';

const getAllAndPlans = async () => {
  try {
    const response = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
    });
    if (!response.length) return { type: 404, message: 'No patients found' };
    return { type: null, message: response };
  } catch (e) {
    console.log(e.message);
    return { type: 500, message: error };
  }
};

const getAllAndSurgeries = async () => {
  try {
    const response = await Patient.findAll({
      include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
    });
    if (!response.length) return { type: 404, message: 'No patients found' };
    return { type: null, message: response };
  } catch (e) {
    console.log(e.message);
    return { type: 500, message: error };
  }
};

const surgeryByDoctor = async (name) => {
  try {
    const response = await Surgery.findAll({
      where: { doctor: name },
      include: { model: Patient, as: 'patients', through: { attributes: [] } },
    });
    if (!response.length) return { type: 404, message: 'No plan found' };
    return { type: null, message: response };
  } catch (e) {
    console.log(e.message);
    return { type: 500, message: error };
  }
};

const getAllAndSurgeriesRestrict = async () => {
  try {
    const response = await Patient.findAll({
      include: {
        model: Surgery,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      },
    });
    if (!response.length) return { type: 404, message: 'No patients found' };
    return { type: null, message: response };
  } catch (e) {
    console.log(e.message);
    return { type: 500, message: error };
  }
};

const getPlanUsers = async (id) => {
  try {
    const response = await Plan.findAll({
      // eslint-disable-next-line camelcase
      where: { plan_id: id },
      include: [{
        model: Patient,
        as: 'patients',
      }],
    });
    if (!response.length) return { type: 404, message: 'No patients found' };
    return { type: null, message: response };
  } catch (e) {
    console.log(e.message);
    return { type: 500, message: error };
  }
};

const insert = async ({ fullname, plan_id }) => {
  try {
    // eslint-disable-next-line camelcase
    const response = await Patient.create({ fullname, plan_id });
    return { type: null, message: response };
  } catch (e) {
    console.log(e.mesage);
    return { type: 500, message: error };
  }
};

module.exports = {
  getAllAndPlans,
  getAllAndSurgeries,
  getPlanUsers,
  insert,
  getAllAndSurgeriesRestrict,
  surgeryByDoctor,
};