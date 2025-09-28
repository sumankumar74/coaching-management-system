import ConnectDb from "@/app/utils/ConnectDb";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import Admin from "@/app/models/Admin";


ConnectDb();
export async function GET(req){
    let data = await req.json();
    return NextResponse.json(data);
}

export const POST = async(req)=>{
    let record = await req.json();
  
    let {email, password}= record;
    
    let salt = await bycrypt.genSalt(10);
    let hashedPassword = await bycrypt.hash(password, salt);
    password = hashedPassword;

    let data = new Admin({email, password:hashedPassword});
    try{
        data = await data.save();
        return NextResponse.json({"msg":"Admin Account Created Successfully"})
    }
    catch(err){
        return NextResponse.json({"msg":"something went wrong", "error": err.message})
    }
}
