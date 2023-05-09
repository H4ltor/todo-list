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
        }
    }
})

export const {Add,Remove}= AddTodoReducer.actions

export default AddTodoReducer.reducer
