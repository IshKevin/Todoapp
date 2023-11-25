import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import { Todos } from '../Todos/Todos'
import './Home.css'


const Home = () => {
  return (
    <div className="main-body">
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default Home