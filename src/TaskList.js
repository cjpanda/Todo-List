import React from 'react'
import SingleTask from './SingleTask';


const TaskList = ({tasks, handleCheck, handleDelete}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <SingleTask
                    key ={task.id}
                    task ={task}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ))}
        </ul>
    )
    }

export default TaskList