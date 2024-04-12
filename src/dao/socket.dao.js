import Socket from "../models/socket.model.js";

const socketDao = {};

socketDao.getAll = async () => {
  const sockets = await Socket.find();
  return sockets;
};

socketDao.getOne = async (socketId) => {
  const socket = await Socket.findById(socketId);
  return socket;
};

socketDao.getByCategory = async (category) => {
  const sockets = await Socket.find({ category: category });
  return sockets;
};

socketDao.getByPriority = async (priority) => {
  const sockets = await Socket.find({ priority: priority });
  return sockets;
};

socketDao.getByDueDate = async (dueDate) => {
  const sockets = await Socket.find({ dueDate: dueDate });
  return sockets;
};

socketDao.insertOne = async (socket) => {
  console.log("Datos recibidos para insertar en la base de datos:", socket); // Agregar este registro de consola
  return await Socket.create(socket);
};

socketDao.updateOne = async (socketId, socket) => {
  return await Socket.findByIdAndUpdate(socketId, socket);
};

socketDao.deleteOne = async (socketId) => {
  return await Socket.findByIdAndDelete(socketId);
};

export default socketDao;
