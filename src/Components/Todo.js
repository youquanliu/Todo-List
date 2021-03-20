import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {

    const completeHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el, completed: !el.completed
                    }
                }
                return el
            })
        )
    }
    
    const deleteHandler = () => {
        setTodos(
            todos.filter(t => t.id !== todo.id)
        )
    }

    return (
        <div className='todo'>

            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {todo.text}</li>

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
