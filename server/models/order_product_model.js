import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const OrderProduct = sequelize.define("order_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

export default OrderProduct