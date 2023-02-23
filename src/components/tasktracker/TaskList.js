// import {FaTimes } from 'react-icons/fa'

export const TaskList = ({ task }) => {
  return (
    <div className='event'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
    </div>
  )
}
