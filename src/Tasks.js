import React from 'react'
import TaskList from './TaskList';


const Tasks = ({tasks, handleCheck, handleDelete}) => {
    return (
        <main>
            {tasks.length ? (
                <TaskList 
                    tasks = {tasks}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p styke={{marginTop: '2rem'}}>Your List Is Empty</p>
            )}
        </main>
    )
}

export default Tasks