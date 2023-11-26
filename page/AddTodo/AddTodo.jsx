import { useState, useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../../context/TodoContext'
import './AddTodo.css'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = [...todos, { id: uuidv4(), text: inputValue, completed: false }];
    setTodos(newTodo);
    setInputValue('');
  };
  
  useEffect(() => {
    console.log('Storing todos in local storage:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className='main-head'>Task schedule</div> 
      <div className="AddTodo">
        <input 
          type="textbox" 
          value={inputValue} 
          onChange={handleInputChange}  
          className="input-box"/> 
        <button type="button" onClick={handleAddTodo} className='button'>Add</button>   
      </div>
    </>
  )
}

export default AddTodo