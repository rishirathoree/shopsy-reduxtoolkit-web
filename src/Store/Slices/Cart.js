import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        // add reducers
        addToCart:(state,action)=>{
            const product = action.payload;
            const findExisting = state.findIndex(item=>item.id === product.id)
            if(findExisting === -1){
                state.push({...product,qty:1})
            }
        },
        removeCartItem: (state, action) => {
            const filterItemsCartlist = state.filter(item => item.id !== action.payload);
            return state = filterItemsCartlist;
          },
        increaseQty:(state,action)=>{
            const findItem = state.find(item=>item.id === action.payload)
            if(findItem){
                findItem.qty += 1
            }
        },
        decreaseQty: (state,action)=>{
            const findItem = state.find(item=>item.id === action.payload)
            if(findItem.qty > 1){
                findItem.qty -= 1
            }
        },
    }
})

export const {addToCart,increaseQty,decreaseQty, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;