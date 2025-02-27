import { Router } from "express"
import UserController from "../controllers/users_controller.js"

const router = new Router()

router.post("/registration", UserController.registration)
router.post("/login", UserController.login)
router.get("/", UserController.getAll)

export default router