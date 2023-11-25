import mongoose  from "mongoose";

const saleSchema = new mongoose.Schema({
    item:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
},{timestamps:true});

const Sale = mongoose.model('Sale', saleSchema);
export default Sale;

