const express = require("express");
const Router = express.Router();
const categoriesController = require("../controller/categorycontroller");
const itemsController = require("../controller/itemcontroller");

Router.get("/categories", categoriesController.getAllCategories);
Router.get("/categories/:id", categoriesController.getCategoryById);
Router.post("/categories", categoriesController.createCategory);
Router.put("/categories/:id", categoriesController.updateCategory);
Router.delete("/categories/:id", categoriesController.deleteCategory);

Router.get("/items", itemsController.getItems);
Router.get("/items/:id", itemsController.getItemById);
Router.post("/items", itemsController.creatItem);
Router.put("/items/:id", itemsController.updateItem);
Router.delete("/items/:id", itemsController.deleteItem);

module.exports = Router;
