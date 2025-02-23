import Basket from "../models/basket_model.js"
import Product from "../models/product_model.js"
import BasketProduct from "../models/basket_product_model.js"

class BasketController {
    async addProductToBasket(req, res) {
        try {
            const {userId, productId} = req.body
            const basket = await Basket.findOne({where: {userId}})
            const product = await Product.findOne({where: {id: productId}})
            basket.addProduct(product)
            res.json({message: "Product has been added to basket"})
        } catch (e) {
            return res.status(500).json({message: "Ошибка сервера", userId: req.body.userId || "penis"})
        }
    }

    async getAllProducts(req, res) {
        try {
            const {userId} = req.body
            const basket = await Basket.findOne({where: {userId}})
            const products = await basket.getProducts()
            res.json(products)
        } catch (e) {
            return res.status(500).json({message: "fuck"})
        }
    }
    async deleteProduct(req, res) {
        try {
            const {userId} = req.body
            const {productId} = req.params
            const basket = await Basket.findOne({where: {userId}})
            await BasketProduct.destroy({where: {basketId: basket.id, productId}})

            res.json({message: "Product has been deleted from the basket"})
        } catch (e) {
            return res.status(500).json({message: "fuck"})
        }
    }
}

export default new BasketController()