import Item from "../models/items.models.js";


export const AddItem = async(req,res) =>{
    console.log("request recieved",req.body)
    try{
        const item = await Item.create(req.body)
        res.status(201).json({
            success:true,
            item
        }) 
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

export const UpdateItem = async(req,res) =>{
    try{
        const item = await Item.findById(req.params.id)
        if(!item){
           return  res.status(404).json({ 
                success:false,message:"Item not Found !"
            }) 
        }
            const updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{new:true})

            res.status(201).json({
            success:true,
            updatedItem
        }) 
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

export const DeleteItem = async(req,res) =>{
    try{
        const item = await Item.findById(req.params.id)
        if(!item){
           return  res.status(404).json({ 
                success:false,message:"Item not Found !"
            }) 
        }
        const deletedItem = await item.deleteOne()
        res.status(200).json({
            success:true,message:"Item deleted Successfully",
            deletedItem
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

export const GetAllItems = async(req,res) =>{
    try{
        const allItems = await Item.find({})
        res.status(201).json({
            success:true,
            allItems
        }) 
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
























