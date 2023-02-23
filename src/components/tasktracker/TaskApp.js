import Header from "./header"
import Task from "./Task"
import  { useState } from 'react'

export const TaskApp = () => {
    const [tasks, setTasks] =useState(
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting at school',
                day: 'Feb 6th at 1:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Food shooping',
                day: 'Feb 5th at 2:30pm',
                reminder: false,
            },
        ]
    );
    
  return (
    <div className="container">
        <Header />
        <Task />
    </div>
  )
}
