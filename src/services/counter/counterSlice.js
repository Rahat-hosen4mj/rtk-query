import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
   name: 'conter',
   initialState:{count: 0},
   reducers:{
    increment : state => {
        state.count = state.count + 1;
    },
    decrement : state => {
        let dec = state.count;
        if(dec > 0 ){
            state.count = state.count - 1;
         }
        //else{
        //     state.count = 0
        // }
        // state.count = state.count - 1;
    },
    reset : state => {
        state.count = 0;
    },
    incrementByNumber: (state, action) =>{
        state.count = state.count + action.payload;
    }

   }
});

export const {increment, decrement , reset , incrementByNumber} = counterSlice.actions;

export default counterSlice.reducer