import { createSlice } from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        listitem:[],
        isAuth:false,
        token:null
    },
    reducers:{
        ADD:(state,action)=>{
            state.listitem.push({ inputvalue: action.payload.inputvalue,datevalue:action.payload.datevalue,image:action.payload.image,key:action.payload.key });
        },
        REMOVE:(state,action)=>{
            state.listitem.splice(action.payload,1)
            
        },
        Authenticate:(state,action)=>{
            state.isAuth=action.payload
        },
        AddToken:(state,action)=>{
            state.token=action.payload
        }
    }
})

export const {ADD,REMOVE,Authenticate,AddToken}=counterSlice.actions;

export default counterSlice;