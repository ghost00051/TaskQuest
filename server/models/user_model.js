import sequelize from "../db.js"
import { DataTypes } from "sequelize"

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.ENUM("USER", "ADMIN"), defaultValue: "USER"}
})

export default User