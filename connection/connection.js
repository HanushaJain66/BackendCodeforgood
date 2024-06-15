import mongoose from 'mongoose';

const Connection = async (username,password)=>{
    try{
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.jb6pz7m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connection is successfull");
    } catch(error){
        console.log("connection is Unsuccessfull");
    }
}
export default Connection;