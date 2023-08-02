import React from 'react'

const Footer = ({ length }) => {
 
    return (
        <footer>
            <p> {length} {length === 1 ? "Task" : "Tasks"} Listed  </p>
        </footer>
    )
}

export default Footer