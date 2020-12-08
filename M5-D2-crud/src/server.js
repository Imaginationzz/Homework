const express = require("express");
const cors = require("cors");
const usersRoutes = require("./students");

const server = express();

const port = 3001;

server.use(cors());
server.use(express.json());
server.use("/students", usersRoutes);

server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
