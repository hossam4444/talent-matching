module.exports = ({ host, port, user, pass, db }) => {
  if (pass) {
    return `mongodb://${user}:${pass}@${host}:${port}/${db}`;
  }
  return `mongodb://${host}:${port}/${db}`;
};
