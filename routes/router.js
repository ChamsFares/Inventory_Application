const express = require("express");
const Router = express.Router();
const categoriesController = require("../controller/categorycontroller");
const itemsController = require("../controller/itemcontroller");

Router.get("/categories", categoriesController);
Router.get("/categories/:id", categoriesController);
Router.post("/categories", categoriesController);
Router.put("/categories/:id", categoriesController);
Router.delete("/categories/:id", categoriesController);

Router.get("/items", itemsController);
Router.get("/items/:id", itemsController);
Router.post("/items", itemsController);
Router.put("/items/:id", itemsController);
Router.delete("/items/:id", itemsController);

module.exports = Router;
