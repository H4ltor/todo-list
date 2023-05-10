import { createSlice } from "@reduxjs/toolkit";
import {useSelector} from "react-redux";


export const AddTodoReducer = createSlice({
    name:'addTodo',
    initialState:[],
    reducers:{
        Add:(state,action)=>{
            state.push(action.payload)
        },
        Remove:(state,action)=>{
            return state.filter((addTodo,idx)=> idx !== action.payload)
        },
        Modify:(state,action)=>{
            const { idx, text } = action.payload;
            state[idx] = text;
        }
    }
})

export const {Add,Remove, Modify}= AddTodoReducer.actions

export default AddTodoReducer.reducer
