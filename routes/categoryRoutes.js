const { Router } = require("express");
const {
  categoryNameValidation,
  categoryDeleteValidation,
  validate,
} = require("../controllers/validator");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategory);

categoryRouter.get("/add-category", categoryController.addCategoryForm);
categoryRouter.post(
  "/add-category",
  categoryNameValidation,
  validate,
  categoryController.createCategory
);

categoryRouter.get("/edit-category/:id", categoryController.editCategoryForm);
categoryRouter.post(
  "/edit-category/:id",
  categoryNameValidation,
  validate,
  categoryController.editCategory
);

categoryRouter.get(
  "/delete-category",
  categoryDeleteValidation,
  validate,
  categoryController.deleteCategory
);

module.exports = categoryRouter;
