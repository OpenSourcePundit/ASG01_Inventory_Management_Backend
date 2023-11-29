import express from "express";
import {AddItem,UpdateItem,DeleteItem,GetAllItems} from "../controller/items.controller.js"



const ItemRouter = express.Router()

ItemRouter.post('/new',AddItem)
ItemRouter.get('/all',GetAllItems)
ItemRouter.route('/:id').put(UpdateItem).delete(DeleteItem)





















export default ItemRouter