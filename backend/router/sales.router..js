import express from 'express'
import {AddNewSale,GetAllSales} from '../controller/sales.controller.js'



const SalesRouter = express.Router()

SalesRouter.post('/new',AddNewSale)
SalesRouter.get('/all',GetAllSales)

export default SalesRouter;