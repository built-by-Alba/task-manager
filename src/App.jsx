import {useState} from "react";
import "./App.css";

function App(){
const [text, setText] = useState("");
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");
let filteredTasks = tasks;
if (filter === "active") {
  filteredTasks = tasks.filter(function(task){
    return !task.completed;
  });
}

if (filter === "completed") {
  filteredTasks =tasks.filter(function(task){
    return task.completed;
  });
}


return (
  <div className="app">
    <h1 className="title">Task Manager</h1>
    <p className="subtitle">My tasks</p>

    <div className="input-area">
  <input className="task-input" value={text} onChange={(e) => setText(e.target.value)}/>
  <button className="add-button" onClick={() => { setTasks([...tasks,
  {
    id:Date.now(),
    text:text,
     completed: false}]); setText("");
    }}>Add Task</button>
</div>

    <button className="filter-button" onClick={() => setFilter("all")}>All</button> 
    <button className="filter-button" onClick={() => setFilter("active")}>Active</button>
    <button className="filter-button" onClick={() => setFilter("completed")}>Completed</button>


  {tasks.length === 0 && <p>No tasks yet!</p>}    

  {filteredTasks.map(function(task){
    return (
      <div className="task" key={task.id}>
    <p style={{textDecoration:task.completed ? "line-through" : "none"}}>{task.text}</p>

    <button className="complete-button" onClick={() => {
      setTasks(tasks.map(function(item){
        if (item ===task) {
          return {...item, completed: !item.completed};
        }
        return item;
    }));
    }}>
      {task.completed ? "Undo" : "Complete"}
    </button>

    <button className="delete-button" onClick={() => {
    setTasks(tasks.filter(function(item) {
      return item !== task;
    }));
  }}>
    Delete
  </button>
  
  </div>

);
})}
</div>
);
}

export default App;

