import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"
import express from "express"
import { allOrders, placeOrder, placeOrderStripe, UpdateStatus, userOrders } from "../controllers/orderController.js"

const orderRouter = express.Router()

orderRouter.post('/list' ,adminAuth , allOrders)
orderRouter.post('/status',adminAuth , UpdateStatus)
orderRouter.post('/place' ,authUser, placeOrder)
orderRouter.post('/stripe' ,authUser, placeOrderStripe)
orderRouter.post('/userorders',authUser, userOrders)

export default orderRouter