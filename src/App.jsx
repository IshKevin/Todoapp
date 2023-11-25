import { TodoProvider } from "../context/TodoContext"
import Home from "../page/Home/Home"


function App() {
 


  return (
    <TodoProvider>
    <Home/>
    </TodoProvider>
  
  )
}

export default App
