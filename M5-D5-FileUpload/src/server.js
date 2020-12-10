const express = require("express");
const cors = require("cors");
const { join } = require("path");
const studentsRoutes = require("./students");
const projectsRoutes = require("./projects");
const reviewsRoutes = require("./reviews");
const fileRoutes = require("./file");

const server = express();

const port = 3001;

const publicFolderPath = join(__dirname, "../public");
server.use(express.static(publicFolderPath)); // this means i ll be able to grab the images when i type that link on the browser
server.use(cors());
server.use(express.json());
server.use("/students", studentsRoutes);
server.use("/projects", projectsRoutes);
server.use("/reviews", reviewsRoutes);
server.use("/file", fileRoutes);

server.listen(port, () => {
  console.log("Server is running on port: ", port);
});
