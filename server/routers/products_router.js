import { Router } from "express"
import ProductsController from "../controllers/products_controller.js"
import { check } from "express-validator"

const router = new Router()

router.post("/", [
    check("name", "Title can't be empty").notEmpty(),
    check("price", "Price can't be empty").notEmpty()
], ProductsController.create)
router.get("/", ProductsController.getAll)
router.get("/:id", ProductsController.getOne)
router.put("/", ProductsController.update)
router.delete("/:id", ProductsController.delete)

export default router