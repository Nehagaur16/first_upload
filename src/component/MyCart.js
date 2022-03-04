import React from 'react';
import {createStore} from "redux";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function MyCart({  }) {
    
    var defaultStateCart = 0;
    var cartData = 0;
 
    //reducer 
    const cartReducer = (state=defaultStateCart,action) => {
        console.log("reducer executed", action)
        switch (action.type){
            case "Add_To_Cart":
              return state = state + 1
            case "Delete_From_Cart":
              return state = state - 1
            default: 
              return state
        }
    }

    //store
    var store = createStore(cartReducer)
    console.log("store.getstate", store.getState())

    //dispatch
    /*
    store.dispatch({type:"Delete_From_Cart"})
    console.log("store.getstate", store.getState())
    cartData = store.getState()
    */

    // adding to cart //
    const addCart = () =>{
        store.dispatch({type:"Add_To_Cart"})
        console.log("store.getstate", store.getState())
    }
    
    //delete cart method
    const delCart = () => {
       store.dispatch({type:"Delete_From_Cart"})
       console.log("store.getstate", store.getState())
    }
    
    cartData = store.getState();
    return (
        <div>
            <div class="quantity">
                    <button class="plus-btn" type="button" name="button" onClick={addCart}>
                        <FaPlus/>
                    </button>
                    
                    <h1>Hello {cartData}</h1>
                    <button class="minus-btn" type="button" name="button" onClick={delCart}>
                        <FaMinus/>
                    </button>
            </div>
        </div>
    )
}
