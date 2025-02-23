import { Router } from "express"
import BasketController from "../controllers/baskets_controller.js"
import tokenHandle from "../middlewares/token_handler_middleware.js"

const router = new Router()

router.post("/", tokenHandle(true), BasketController.addProductToBasket)
router.get("/", tokenHandle(true), BasketController.getAllProducts)
router.delete("/:productId", tokenHandle(true), BasketController.deleteProduct)

export default router