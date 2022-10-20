const { Account, Profile, Comment } = require('../models');

const getById = async (id) => {
  try {
    const listOfAcc = await Account.findAll({
      where: { id },
      include: { model: Profile, as: 'profile' },
    });

    if (!listOfAcc.length) {
      return { type: 404, message: 'Account not found' };
    }

    return { type: null, message: listOfAcc };
  } catch (err) {
    console.log(err);
    return { type: 500, message: 'Something went wrong' };
  }
};

const getByIdLazy = async (id) => {
  const acc = await Account.findOne({ where: { id } });
  if (!acc) {
    return { type: 404, message: 'Account not found' };
  }
  return { type: null, message: acc };
};

const getComments = async (id) => {
  const comments = await Comment.findAll({
    where: { accountId: id },
  });
  if (!comments.length) return { type: 404, message: "No comments registered" };
  return { type: null, message: comments };
};

const createAccount = async (body) => {
  try {
    const { email, password, firstName, lastName, phone } = body;
    const account = await Account.create({ email, password });
    if (!account) return { type: 404, message: "Error creating account" };
    const profile = await Profile.create({ firstName, lastName, phone, accountId: account.id });
    if (!profile) return { type: 404, message: "Error creating profile" };
    return { type: null, message: "Account created! "};
  } catch (e) {
    return { type: 500, message: e.message };
  }
};

const createComment = async (id, body) => {
  try {
    const { message } = body;
    const comment = await Comment.create({ message, upvoting: 0, downvoting: 0, accountId: id });
    if (!comment) return { type: 404, message: "Error creating comment" };
    return { type: null, message: "Comment created! "};
  } catch (e) {
    return { type: 500, message: e.message };
  }
}

module.exports = {
  getById,
  getByIdLazy,
  getComments,
  createAccount,
  createComment,
};