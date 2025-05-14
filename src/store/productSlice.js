import { createSlice } from "@reduxjs/toolkit";
import perfume1 from '../assets/perfume.jpg'
import perfume2 from '../assets/perfume2.jpg'
import perfume3 from '../assets/perfume3.jpg'
import perfume4 from '../assets/perfume4.jpg'
const initialState={

    products:[

        {
            id:1,
            name:'Perfume 1',
            price:13.99,
            image:perfume1
        },
        {
            id:2,
            name:'Perfume 2',
            price:9.49,
            image:perfume2
        },

        {
            id:3,
            name:'Perfume 3',
            price:8.99,
            image:perfume3
        },
        {
            id:4,
            name:'Perfume 4',
            price:10,
            image:perfume2
        },
        {
            id:5,
            name:'Perfume 5',
            price:14.76,
            image:perfume1
        },
        {
            id:6,
            name:'Perfume 6',
            price:6.99,
            image:perfume2
        },
        {
            id:7,
            name:'Perfume 7',
            price:7.68,
            image:perfume3
        },
        {
            id:8,
            name:'Perfume 8',
            price:8.98,
            image:perfume4

        },
    ],
    searchTerm:''
};

const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setSearchTerm(state,action){
            state.searchTerm=action.payload
        }
    },
});
export const {setSearchTerm}=productsSlice.actions
export default productsSlice.reducer;