import Order from "../models/order_model.js"
import Product from "../models/product_model.js"
import User from "../models/user_model.js"

class OrderController {
    async createOrder(req, res) {
        try {
            const {userName, phoneNumber, adress, comment, products} = req.body;
            const order = await Order.create({userName, phoneNumber, adress, comment});
            
            for (let productId of products) {
                const product = await Product.findOne({where: {id: productId}});
                order.addProduct(product);
            }

            const {userId} = req.body;

            if (userId) {
                const user = await User.findOne({where: {id: userId}});
                user.addOrder(order);
            }

            res.status(200).json({message: "Order has been created"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneOrder(req, res) {
        try {
            const order = await Order.findOne({where: {id: req.params.id} })
            res.status(200).json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAllOrders(req, res) {
        try {
            const orders = await Order.findAll()
            res.status(200).json(orders)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updateOrder(req, res) {
        try {
            await Order.update(req.body,
                {where: {id: req.body.id}})
            res.status(200).json({message: "Order has been updated"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteOrder(req, res) {
        try {
            await Order.destroy({where: {id: req.params.id}})
            res.status(200).json({message: "Order has been deleted"})
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new OrderController()