import React, { useState ,useContext,useEffect } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/StoreContext.jsx';
import axios from "axios";

const MyOrders = () => {
   const {url,token} = useContext(StoreContext);
   const [data,setData] = useState([]);


   const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data);
    console.log(response.data.data)
   }

   useEffect (()=>{
    if (token) {
        fetchOrders();
    }
   },[token])



  return (
    <div > 
      
    </div>
  )
}

export default MyOrders
