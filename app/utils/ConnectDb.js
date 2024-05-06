import mongoose  from "mongoose";

async function ConnectDb(){
    try{
    mongoose.connect ("mongodb://localhost:27017/cms")
    }
    catch(err){
        throw new Error ("Couldn't connect to MongoDB")
    }
}
export default ConnectDb;