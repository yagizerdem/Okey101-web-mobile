const { Server } = require("socket.io");

let io_;

const setIO = (server) => {
  io_ = new Server(server);
  return io_;
};

const getIO = () => {
  return io_;
};

module.exports = {
  getIO,
  setIO,
};
