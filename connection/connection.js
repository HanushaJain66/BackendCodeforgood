import mongoose from 'mongoose';

const Connection = async (username,password)=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017`);
        console.log("connection is successfull");
    } catch(error){
        console.log("connection is Unsuccessfull");     
    }
}
export default Connection;
                                        