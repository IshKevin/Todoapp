import { useContext } from 'react'
import './Todos.css'
import { TodoContext } from '../../context/TodoContext'

export const Todos = ({ id, text,completed }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const completedTodo = (e) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === e.target.value);
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      completed: !newTodos[todoIndex].completed,
    };
    setTodos(newTodos);
  }

  const deletTodo = (e) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === e.target.id);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  const isChecked = completed ? 'checked' : '';
  return (
    <div className='todoList'>
      <input type="checkbox" 
      className="checkbox" 
      id={id} 
      value={id}
      checked={isChecked}
      onChange={e=> completedTodo(e)}/>
      <div className="todoItem">{text}</div> {/* Update to use text instead of title */}
      <button type="button" className="delete" id={id}
      onClick={e=>deletTodo(e)}>Delete</button>
    </div>
  )
}