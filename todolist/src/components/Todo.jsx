import {useState} from 'react'

const Todo = ({todo, removeTodo}) => {

    return (
        <div className="todo">
            <div className="content">
                <p className='task'>{todo.text}</p>
                <p className="category">
                    {todo.category}
                </p>
            </div>
            <div>
                <button className='complete'>Feito!</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo