import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const addTask = e => {
    const currTasks = [...tasks];
    if(!currTasks.includes(value)){
      currTasks.push(value);
    }
    setValue('');
    setTasks(currTasks);
  }
  return (
    <div className="App">
     <h2>Welcome to Simplify Tasks</h2>
     <input type="text" placeholder="Add task" value={value} onChange={(e)=>setValue(e.target.value)} />
     <button onClick={addTask}>Add Task</button>
     <div>
       <h4>Your Tasks here</h4>
       {tasks.length > 0 ? ( <ul>
          {
             tasks.map((task,idx) => {
              return <li key={idx}>{task} <button>Edit</button> </li>;
            })
          }
       </ul>) : 'No tasks found!!'}
      
     </div>
    </div>
  );
}

export default App;
