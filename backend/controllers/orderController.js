import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'
import stripe from "stripe"

//placing user order for frontend
const placeOrder = async(req,res) =>{

}

const listOrders = async (req,res) =>{
 try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
 }
}

const updateStatus = async (req,res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status Updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}


export {placeOrder,listOrders,updateStatus}