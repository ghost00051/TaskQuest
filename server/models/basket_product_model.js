import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const BasketProduct = sequelize.define("basket_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

export default BasketProduct