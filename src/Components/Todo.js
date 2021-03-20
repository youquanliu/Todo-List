import React from 'react'

const Todo = ({ todo }) => {

    const completeHandler = () => {

    }
    const deleteHandler = () => {

    }

    return (
        <div className='todo'>

            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}</li>

            <button className="complete-btn"
                onClick={completeHandler} >
                <i className="fas fa-check"> </i>
            </button>

            <button className="trash-btn"

                onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
                
            </button>
        </div>
    )
}

export default Todo
