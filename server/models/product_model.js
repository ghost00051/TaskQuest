import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    img: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    description: {type: DataTypes.TEXT}
})

export default Product