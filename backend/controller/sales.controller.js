import Sale from "../models/sales.models.js";
import Item from "../models/items.models.js";




export const AddNewSale = async(req,res) =>{
    try {
        const item = await Item.findById(req.body.itemId)
        if(!item){
            return res.status(404).json({
                success:false,
                message:"item not found in Inventory !"
            })
        }
        else if( !req.body.quantity || typeof(req.body.quantity)!=="number"){
            return res.status(404).json({
                success:false,
                message:"Quantity and price Required and must be numbers !"
            })
        }


        const newSaleItem = {item:item._id,price:item.price,quantity:req.body.quantity,itemName:item.name}
        // const itemFromInventory = await Sale.findOne(newSaleItem).populate("item")
        
        // inventory >sale ---true(save,updateinventory) --false (error)    
        if(item.quantity>=req.body.quantity){
            const newSale = await Sale.create(newSaleItem)

            const newItem = await Item.findByIdAndUpdate(item._id,{quantity:item.quantity-req.body.quantity},{new:true})  
            res.status(201).json({
                success:true,
                message:"Sale Recorded !",
                newSale,
                newItem,
            })
        }else{
           return res.status(404).json({
                success:false,
                message:'Sale quantity exceeds items quantity in inventory'
            })
        }
        // const newSale = await Sale.create({item:item._id,price:req.body.price,quantity:req.body.quantity})
        // res.status(201).json({
        //     success:true,
        //     newSale
        // }) 
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}

export const GetAllSales = async(req,res) =>{
    try {
        const allSale = await Sale.find().populate('item')
        res.status(201).json({
            success:true,
            allSale
        })         
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}