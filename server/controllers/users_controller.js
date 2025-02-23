import User from "../models/user_model.js"
import Basket from "../models/basket_model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()

function generateJWT(id, email, role) {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
    )
}

class UserController {
    async registration(req, res) {
        try {
            const { email, password, role } = req.body
            const candidate = await User.findOne({ where: { email } })

            if (candidate) {
                return res.status(404).json({ message: "User with this email already exists" })
            }

            const hashPassword = bcrypt.hashSync(password, 5)
            const user = await User.create({ email, password: hashPassword, role })
            const basket = await Basket.create()
            user.setBasket(basket)

            const token = generateJWT(user.id, email, user.role)

            return res.json({ token })
        } catch (e) {
            console.error(e);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })

            if (!user) {
                return res.status(404).json({ message: "User with this email doesn't exist" })
            }

            const comparePassword = bcrypt.compareSync(password, user.password)

            if (!comparePassword) {
                return res.status(404).json({ message: "Wrong password" })
            }

            const token = generateJWT(user.id, email, user.role)
            return res.json({ token })
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default new UserController()