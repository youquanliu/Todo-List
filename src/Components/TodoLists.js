import React from 'react'
import Todo from './Todo'

const TodoLists = ({ todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => {
                    <Todo todo={todo} />
                })}
            </ul>
        </div>
    )
}


export default TodoLists;