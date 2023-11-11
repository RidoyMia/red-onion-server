import express from "express"
import { orderController } from "./Order.controller"
import AuthGuard from "../../globalError/AuthGuard"
const OrderRouter = express.Router()

OrderRouter.post('/create',orderController.createOrderController)
OrderRouter.get('/all',orderController.getAllOrdersController)
OrderRouter.get('/all/count',orderController.getAllOrdersCountController)
OrderRouter.get('/chart/:email',AuthGuard('admin'), orderController.getOrderByMonthController)
OrderRouter.get('/user/:email',orderController.getUsersOrderController)
OrderRouter.get('/:id', orderController.getSingleOrderController)
OrderRouter.patch('/:id', orderController.orderPaymentController)
OrderRouter.delete('/:id',orderController.deleteOrderController)

export default OrderRouter;