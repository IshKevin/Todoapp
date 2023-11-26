import { useContext } from 'react'
import './Todos.css'
import { TodoContext } from '../../context/TodoContext'
import { FaTrash } from 'react-icons/fa';
import { MdLabelImportant } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

export const Todos = ({ id, text,completed }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const completedTodo = (e) => {
    const id = e.target.value;
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: true } : todo));
  }

  const deletTodo = (e) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === e.target.id);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  return (
    <div className='todoList'>
      {/* <input type="checkbox" 
      className="checkbox" 
      id={id} 
      value={id}
      checked={isChecked}
      onChange={e=> completedTodo(e)}/> */}
      <div className={todos.completed ? 'completed' : 'todoItem'}>{text}</div> {/* Update to use text instead of title */}
      <div className='buttons'>
       <button type="button" className="completed" value={id}onClick={e=>completedTodo(e)}><MdDone/></button>
       <button type="button" className="important"><MdLabelImportant/></button>
       <button type="button" className="edit"><IoMdCreate /></button>
       <button type="button" className="delete" id={id}onClick={e=>deletTodo(e)}><FaTrash/></button> 
        </div>
    </div>
  )
}
