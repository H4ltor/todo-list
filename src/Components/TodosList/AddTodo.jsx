import React, {useEffect, useState} from 'react'
//react icons
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoAddCircleOutline} from 'react-icons/io5'

//redux
import { useDispatch } from 'react-redux'
import { Add } from '../../redux/AddTodo'
import axios from "axios";

const AddTodo = ({setAddTodoModal}) => {
    const [inputText,setInputText]=useState({})
    const dispatch = useDispatch()

    /*useEffect(() => {
        axios
            .get("https://645904d28badff578e01c290.mockapi.io/:endpoint")
            .then((response) => {
                setInputText(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);*/
    const closeHandle = ()=>{
        setAddTodoModal(false);
    }
    const inputHandle = ()=> (e)=>{
        const {value}= e.target;

        /*axios
            .post("https://645904d28badff578e01c290.mockapi.io/:endpoint", {
                value: setInputText,

            })
            .then((response) => {
                setInputText([...value, response.data]);
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };*/
        setInputText(value)
    };

    const addTask =()=>{
        dispatch(Add(inputText))
        setAddTodoModal(false);
    }

    return (
        <div className='w-full h-screen bg-black/30 absolute flex justify-center items-center'>
            <div className='w-[400px] bg-white rounded'>
                <div className='flex flex-col space-y-4 p-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold'>Add New Task</h1>
                        <button onClick={()=> closeHandle()}><AiOutlineCloseCircle/></button>
                    </div>
                    <input type="text" placeholder='new task' className='w-full outline-0 p-2 bg-gray-100' autoFocus
                           onChange={inputHandle()}/>
                    <button

                        onClick={()=> addTask()}
                        className='w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400'>
                        <IoAddCircleOutline size={"1.1rem"}/>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
