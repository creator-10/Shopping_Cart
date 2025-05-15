import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
};

const cartSlice=createSlice({
        name:'cart',
        initialState,
        reducers:{
            addToCart:(state,action)=>{  //state is an array
                const existingItem=state.items.find(item=> item.product.id===action.payload.id);
                if(existingItem){
                    existingItem.quantity+=1;
                }
                else{
                    state.items.push({product:action.payload,quantity:1});
                }
            },
            decrementQty(state,action){
               
               const idx=state.items.findIndex(i=>i.product.id===action.payload.id)
               if(idx!=-1){
                if(state.items[idx].quantity>1){
                    state.items[idx].quantity-=1
                }else{
                    state.items.splice(idx,1)
                }
               }
            },
            removeFromCart(state,action){
                state.items=state.items.filter(i=>i.product.id!==action.payload.id)
            }
        }

});
export const{addToCart,removeFromCart,decrementQty}=cartSlice.actions //action creator
export default cartSlice.reducer

