import React, {useEffect, useState} from "react";
import {MdDelete} from "react-icons/md";
import axios from "axios";
import {Remove} from "../../redux/AddTodo";

const Todo = ({ id,title,completed }) => {
    const[todosList, setTodosList] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        fetchTodos().then(r => console.log(r));

    }, []);

    const fetchTodos = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.data)
            .then(data => setTodosList(data));
    }

    const handleClick = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <button onClick={handleClick}>
                {showList ? 'Masquer la liste' : 'Afficher la liste'}
            </button>
            {showList && (
                <ul>
                    {todosList.map(todo => (
                        <li key={todo.id}>
                            {todo.title} - {todo.completed ? 'Terminé' : 'En cours'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todo
