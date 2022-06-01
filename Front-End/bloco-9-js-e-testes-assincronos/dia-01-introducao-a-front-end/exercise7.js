const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
uppercase('teste', console.log);
module.exports = uppercase;