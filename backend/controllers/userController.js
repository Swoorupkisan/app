import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//                                        login user
const loginUser = async (req,res) =>{

}

//                                        register user
const registerUser = async (req,res) =>{
   const {name,password,email} =req.body;
   try{
//                 checking is user already exists
    const exist = await userModel.findOne({email});
    if(exists){
        return res.json({success:false,message:"User already exists"})
    }
    // validating email format & strong passsword
    if(!validator.isEmail(email)){
         return res.json({success:false,message:"Please enter valid email"})
    }
 
    if(password.length<8){
        return res.json({success:false,message:"Please enter a strong password"})
    }
  //                     hashing user password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword =await bcrypt.hash(password,salt)

  const newUser = new userModel()


   }catch(error){

   }
}

export {loginUser,registerUser}