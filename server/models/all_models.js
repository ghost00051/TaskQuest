import Order from "./order_model.js"
import Product from "./product_model.js"
import User from "./user_model.js"
import Basket from "./basket_model.js"
import BasketProduct from "./basket_product_model.js"
import OrderProduct from "./order_product_model.js"

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Basket.belongsToMany(Product, {through: BasketProduct})
Product.belongsToMany(Basket, {through: BasketProduct})

Order.belongsToMany(Product, {through: OrderProduct})
Product.belongsToMany(Order, {through: OrderProduct})

console.log("#################################################################################################")

export default {
    Order,
    Product,
    User,
    Basket,
    BasketProduct
}