const { Router } = require("express");
const { itemValidation, validate } = require("../controllers/validator");
const itemController = require("../controllers/itemController");

const itemRouter = Router();

itemRouter.get("/:id", itemController.getAllItem);

itemRouter.get("/:id/add-item", itemController.addItemPage);
itemRouter.post(
  "/:id/add-item",
  itemValidation,
  validate,
  itemController.addItem
);

itemRouter.get("/:id/edit-item/:itemid", itemController.editItemPage);
itemRouter.post(
  "/:id/edit-item/:itemid",
  itemValidation,
  validate,
  itemController.editItem
);

itemRouter.get("/:id/delete-item", itemController.deleteItem);

module.exports = itemRouter;
