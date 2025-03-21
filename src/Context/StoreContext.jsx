import { createContext,useState,useEffect } from 'react'
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    const addToCart = (_Id) => {
        
        if(!cartItems[_Id]){
            setCartItems((prev)=>({...prev,[_Id]:1}))
    }
    else{
        setCartItems((prev)=>({...prev,[_Id]:prev[_Id] + 1}))
    }
}
    const removeFromCart = (_Id) => {
    setCartItems((prev)=>({...prev,[_Id]:prev[_Id] - 1}))
    }

    useEffect(() => {
        console.log("Updated cart:", cartItems);
      }, [cartItems]);

const contextValue={                  //react context api
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
}
return(
    <StoreContext.Provider value={contextValue}>
    {props.children}
    </StoreContext.Provider>

)
}
export default StoreContextProvider;