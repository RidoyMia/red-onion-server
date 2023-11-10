import express from "express"
import { orderController } from "./Order.controller"
const OrderRouter = express.Router()

OrderRouter.post('/create',orderController.createOrderController)
OrderRouter.get('/all',orderController.getAllOrdersController)
OrderRouter.get('/user/:email',orderController.getUsersOrderController)
OrderRouter.get('/:id', orderController.getSingleOrderController)
OrderRouter.patch('/:id', orderController.orderPaymentController)
OrderRouter.delete('/:id',orderController.deleteOrderController)

export default OrderRouter;