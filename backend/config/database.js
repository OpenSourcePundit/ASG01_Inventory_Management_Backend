import mongoose from "mongoose";

const ConnectDB = async( ) =>{
    try{
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected to ${con.connection.host}`) 

    }catch (error){
        console.log("error in connecting MongoDB",error.message)
    }
}

export default ConnectDB
















