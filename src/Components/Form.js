import React from 'react'

const Form = ({ input, setInput, todos, setTodos }) => {

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos(
            [...todos,
            {
                text: input,
                completed: false,
                id: Math.random() * 10000
            },
            ]
        )
        setInput('')
    }
    return (
        <div>
            <form>
                <input type="text" className="todo-input"
                    value={input}
                    onChange={inputHandler}
                />

                <button className="todo-button" type="submit"
                    onClick={submitTodoHandler}
                >
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default Form;
