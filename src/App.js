import Header from './Header';
import SearchTask from './SearchTask';
import AddTask from './AddTask';
import Tasks from './Tasks';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  //Database URL
  const API_URL = "http://localhost:3500/tasks";

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState ('')
  const [search, setSearch] = useState ('')

// USe Effect Syncs the Database at load time to The Currently State  using async/await
  useEffect(() => {
    const fetchTasks = async ()=> {
      try {
        const response = await fetch(API_URL);
        const listTasks = await response.json();
        console.log(listTasks)
        setTasks(listTasks)
      } catch (error) {
        console.log(error.stack)
        
      }
    }
    (async () => await fetchTasks())();
  }, [])

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = {id, checked: false, task};
    const listTasks = [...tasks, myNewTask];
    setTasks(listTasks);
  }
// HandleCheck Function checks 
  const handleCheck = (id) => {
      const listTasks = tasks.map((task) => task.id === id ? {...task, checked: !task.checked } : task );
      setTasks(listTasks);    
  }

  const handleDelete = (id) => {
      const listTasks = tasks.filter((task) => task.id !== id);
      setTasks(listTasks);
  }

  const handleSubmit =(e) => {
    e.preventDefault(); 
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  }
  
  return (
    <div className="App">
      < Header title ="My Task List"/>
      <AddTask 
        newTask = {newTask}
        setNewTask = {setNewTask}
        handleSubmit = {handleSubmit}
      />
      <SearchTask 
        search= {search}  
        setSearch ={setSearch}
      />
      <Tasks 
        tasks = {tasks.filter(task => (task.task).toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length= {tasks.length} />
    </div>
  );
}

export default App;
