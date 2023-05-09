import { configureStore } from '@reduxjs/toolkit'
import  AddTodoReducer  from './AddTodo'
export const store = configureStore({
    reducer: {
        addTodo:AddTodoReducer
    },
})