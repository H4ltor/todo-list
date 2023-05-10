
import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modify, Remove} from "./redux/AddTodo";
import AddTodo from "./Components/AddTodo/AddTodo";
import {AiFillEdit, AiOutlinePlus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import './tailwind.css';
import Todo from "./Components/TodosList/Todo";
import axios from "axios";



function App() {
  const[addTodoModal,setAddTodoModal]=useState(false);
  const [editedText, setEditedText] = useState("");
  const todos = useSelector((state)=>state.addTodo)
  const dispatch = useDispatch()



  const removeHandle=(idx)=>{
    dispatch(Remove(idx))
  }

  const modifyHandle=(idx, text)=>{
    setEditedText(text);
    dispatch(Modify({ idx, text: editedText }));
  }

  return (
      <div className="App w-full h-screen flex justify-center items-center">
        <div
            className='w-4/5 md:w-1/2 lg:w-4/12 2xl:w-1/5 m-auto h-1/2 overflow-auto bg-white rounded-md drop-shadow-xl border relative'>
          <div className='w-full sticky top-0 bg-[#161616] text-gray-200 p-4 flex justify-between items-center'>
            <div>
              <h1 className='text-xl font-semibold'>To Do List App</h1>
              <p className='text-xs'>manage your tasks</p>
            </div>
            <div className='w-8 h-8 bg-white text-black rounded-full flex justify-center items-center'>
              <button>
                <AiOutlinePlus onClick={()=> setAddTodoModal(true)} size={"1rem"}/>
              </button>
            </div>
          </div>

          <div className='p-5 text-black'>
            <ul className='space-y-4'>
              <Todo/>
              {todos && todos.map((todo,idx)=>{
                return(
                    <div key={idx} className='bg-gray-100 flex justify-between'>
                      <li  className='flex space-x-4 p-4'>
                        <input type="checkbox" name="" id="complete" className='peer/complete' />
                        <label  className={`peer-checked/complete:line-through ${todo ? 'mt-auto' : ''}`}>{todo}</label>
                      </li>
                      <button onClick={()=>{modifyHandle(idx, todo)}}>
                        <AiFillEdit size={"1.5rem"}/>
                        </button>
                      <button onClick={()=>{removeHandle(idx)}}>
                        <MdDelete size={"1.5rem"}/>
                      </button>
                    </div>
                );
              })}
            </ul>
          </div>
        </div>
        {addTodoModal && <AddTodo setAddTodoModal={setAddTodoModal}/>}
      </div>
  )
}


export default App;
