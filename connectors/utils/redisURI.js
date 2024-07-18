module.exports = ({ pass, user, host, port }) =>
  `redis://${user}:${pass}@${host}:${port}`;
