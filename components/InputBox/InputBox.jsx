import { useState } from 'react'
import './InputBox.css'
const InputBox = () => {
    const [task, setTask] = useState('');
  return (
    <div>
        <input type="textbox" value={task} onChange={e=>e.setTask(e.target.value)} className="input-box"/>
    </div>
  )
}

export default InputBox