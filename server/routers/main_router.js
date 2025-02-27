import { Router } from "express"
import ordersRouter from "./orders_router.js"
import usersRouter from "./users_router.js"
import productsRouter from "./products_router.js"
import basketsRouter from "./baskets_router.js"

const router = new Router()

router.use("/orders", ordersRouter)
router.use("/users", usersRouter)
router.use("/products", productsRouter)
router.use("/baskets", basketsRouter)

export default router