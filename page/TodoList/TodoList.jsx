import { Todos } from "../Todos/Todos";
import { useContext } from 'react'
import './TodoList.css'
import { TodoContext } from '../../context/TodoContext'

const TodoList = () => {
    const [todos, setTodos] = useContext(TodoContext);
    return (
        todos.length >= 1 ? (
            todos.map((item) => (
                <Todos 
                  key={item.id} 
                  id={item.id}
                  text={item.text} // Pass text instead of title
                  completed={item.completed}
                />
            ))
        ) : (
            <h4 className="no-todos">No todos please add some please.... </h4>
        )
    )
}

export default TodoList