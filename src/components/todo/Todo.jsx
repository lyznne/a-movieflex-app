import './Todo.css';
import { useState, useEffect } from 'react';


const Task = ({ task, index, completeTask, removeTask }) => {
    return(
        <div className='task' style={ { textDecoration: task.completed ? "line-through" : ""}}>
            {task.title}
            <button style={{ background: 'red' }} onClick={() => removeTask(index) }>X</button>
            <button onClick={() => completeTask(index)}>Complete</button>
        </div>
    );
}
const CreateTask=({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value)
         return;

        addTask(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' className='input' value={value} placeholder='Add new task' 
            onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}


const Todo= () => {
    const [tasks, setTasks] = useState([
        {
            title: "Sleep",
            completed: false
        },
        {
            title: "Code",
            completed: false
        },
        {
            title: "Repeat",
            completed: false
        }
    ]);
    const [tasksRemaining, setTasksRemaining] = useState(0);
    useEffect(()=> { setTasksRemaining(tasks.filter(task => !task.completed).length )});

    const addTask = title => {
        const newTasks = [ ...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    const removeTask = index => {
        const newTasks = [ ...tasks];
        newTasks.splice(index, 1)
        setTasks(newTasks);
    }

    const addTasks = title => {
        const newTasks = [ ...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed =true;
        setTasks(newTasks);
    }

    return (
        <div className='todo-container'>
            <div className='header'>Todo - Items({ tasksRemaining }) </div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask= {completeTask}
                    removeTask={ removeTask }
                    key={index} />
                ))}
            </div>
            <div className='create-task' >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}

export default Todo;