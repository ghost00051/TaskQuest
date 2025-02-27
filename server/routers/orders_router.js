import { Router } from "express"
import OrderController from "../controllers/orders_controller.js"
import tokenHandle from "../middlewares/token_handler_middleware.js"

const router = new Router()

router.post("/", tokenHandle(false), OrderController.createOrder)
router.get("/", OrderController.getAllOrders)
router.get("/:id", OrderController.getOneOrder)
router.put("/", OrderController.updateOrder)
router.delete("/:id", OrderController.deleteOrder)

export default router