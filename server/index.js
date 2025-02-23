import express from "express"
import mainRouter from "./routers/main_router.js"
import sequelize from "./db.js"
import cors from "cors"
import fileUpload from "express-fileupload"
import path from "path"
import { fileURLToPath } from "url"
import allModels from "./models/all_models.js"
import { config } from "dotenv"

config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use("/static", express.static(path.resolve(__dirname, "static")))
app.use(express.urlencoded({extended: false}))
app.use("/delivery_api", mainRouter)

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()