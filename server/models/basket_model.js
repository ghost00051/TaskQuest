import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

export default Basket