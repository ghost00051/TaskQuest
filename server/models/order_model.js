import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const Order = sequelize.define("order", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: {type: DataTypes.INTEGER, allowNull: false},
    adress: {type: DataTypes.TEXT, allowNull: false},
    comment: {type: DataTypes.TEXT},
    status: {type: DataTypes.ENUM("NEW", "COMPLETED"), defaultValue: "NEW"}
})

export default Order