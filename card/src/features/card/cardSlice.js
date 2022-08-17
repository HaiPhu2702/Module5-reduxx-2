import {createSlice} from "@reduxjs/toolkit";
import card from "./pages/Card";


const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        addedIds: [],
        quantityById: {}
    },
    reducer:{},
    extraReducers:{

    }
})
export const cardSelect=state=>state.cardReducer
export default cardSlice.reducer