import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()

function tokenHandle(requiredToken) {
    return function tokenDecode(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
    
            if (!token && requiredToken) {
                res.status(404).json({message: "Missing token"});
            }

            else if (token) {
                console.log(`########## ${token} ##########`)

                const user = jwt.verify(token, process.env.SECRET_KEY)
                req.body.userId = user.id
            }
            
            next()
        } catch (e) {
            res.status(500).json({message: "Ошибка на мидлваре", error: e})
        }
    }
}

export default tokenHandle