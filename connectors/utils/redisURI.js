module.exports = ({ pass, user, host, port }) => {
  return `redis://${user}:${pass}@${host}:${port}`;
};
