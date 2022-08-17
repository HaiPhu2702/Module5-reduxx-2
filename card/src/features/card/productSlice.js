import {createSlice} from "@reduxjs/toolkit";
// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

// export const addCard=createAsyncThunk('card/addCard',async id=>{
//
// })


 const productSlice=createSlice({
    name:"card",
     initialState:{
         products:[
            {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
            {"id": 2, "title": "T-Shirt White", "price": 10.99, "inventory": 10},
            {"id": 3, "title": "iphone 12 pro", "price": 700, "inventory": 5}
        ]
     },
     reducers:{},
     extraReducers:{


     }
    })

export const productSelect=state =>state.productReducer.products

export default productSlice.reducer