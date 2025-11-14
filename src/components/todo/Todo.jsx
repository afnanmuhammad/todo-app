import React from 'react'
import './Todo.css'

const Todo = () => {
    return (
        <div>
            <h1>Todo App</h1>
            <div className='date-time-container'>
                <input type="date" id='date' />
                <input type="time" id='time' />
            </div>
            <div>felds</div>
        </div>
    )
}

export default Todo