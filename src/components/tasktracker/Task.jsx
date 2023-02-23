import { TaskList } from "./TaskList"

const Task = ({ tasks }) => {
    
  return (
    <>
    {tasks.map((task)=> (
        <TaskList key={task.id} task={task} />
    ))}
    </>
  )
}

export default Task