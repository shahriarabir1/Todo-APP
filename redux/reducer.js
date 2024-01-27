import { createSlice } from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        listitem:[]
    },
    reducers:{
        ADD:(state,action)=>{
            state.listitem.push({ inputvalue: action.payload.inputvalue,datevalue:action.payload.datevalue });
        },
        REMOVE:(state,action)=>{
            state.listitem.splice(action.payload,1)
        }
    }
})

export const {ADD,REMOVE}=counterSlice.actions;

export default counterSlice;