import  express  from "express";
import { config } from "dotenv";
import ItemRouter from "./router/item.router.js";
import SaleRouter from './router/sales.router..js';
import { errorHandler } from "./middlewares/errorHandler.js";



config({path:"backend/config/config.env"})
const app = express();
//using Middlewares
app.use(express.json())         // JSON object handling 
app.use(express.urlencoded({extended:true}))   //

//Routes
app.use('/api/v1/items',ItemRouter)
app.use('/api/v1/sales',SaleRouter)

app.use(errorHandler)







export default app;