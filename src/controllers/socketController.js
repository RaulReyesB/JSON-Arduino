import socketDao from "../dao/socket.dao.js";

export const getAll = (req, res) => {
  socketDao
    .getAll()
    .then((sockets) => res.json({ sockets }))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByCategory = (req, res) => {
  socketDao
    .getByCategory(req.params.category)
    .then((sockets) => res.json(sockets))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByPriority = (req, res) => {
  socketDao
    .getByPriority(req.params.priority)
    .then((sockets) => res.json(sockets))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getByDueDate = (req, res) => {
  socketDao
    .getByDueDate(req.params.dueDate)
    .then((sockets) => res.json(sockets))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const getOne = (req, res) => {
  socketDao
    .getOne(req.params.socketId)
    .then((socket) => {
      !socket
        ? res.json({
            message: "Socket not found",
          })
        : res.json({ socket });
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const insertOne = (req, res) => {
  const socket = req.body;
  console.log("Datos recibidos para insertar:", socket);
  socketDao
    .insertOne(req.body)
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const updateOne = (req, res) => {
  socketDao
    .updateOne(req.params.socketId, req.body)
    .then((socket) => {
      !socket
        ? res.json({
            message: "Socket not found",
          })
        : res.json(socket);
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};

export const deleteOne = (req, res) => {
  socketDao
    .deleteOne(req.params.socketId)
    .then((result) => {
      !result
        ? res.json({
            message: "Socket not found",
          })
        : res.json(result);
    })
    .catch((err) =>
      res.json({
        status: "Server unavaliable",
      })
    );
};
