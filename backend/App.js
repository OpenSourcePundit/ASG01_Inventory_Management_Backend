import  express  from "express";
import helmet from "helmet";
import  cors  from "cors";
import { config } from "dotenv";
import ItemRouter from "./router/item.router.js";
import SaleRouter from './router/sales.router..js';
import { errorHandler } from "./middlewares/errorHandler.js";



config({path:"backend/config/config.env"})
const app = express();
//using Middlewares
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({extended:true}))   //
app.use(express.json())         // JSON object handling 

//Routes
app.use('/api/v1/items',ItemRouter)
app.use('/api/v1/sales',SaleRouter)

app.use(errorHandler)







export default app;