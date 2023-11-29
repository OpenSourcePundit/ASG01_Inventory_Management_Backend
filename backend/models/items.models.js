import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        
        enum:["Electronics", "Stationary", "Food", "Furniture", "Sports", "Fashion", "Home & Kitchen"],
        default:"Electronics",
    },
})

const Item = mongoose.model('Item',ItemSchema)
export default Item;

















