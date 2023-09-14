import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, removeTodo }) => {

    return (
        <div className='todo-list'>
            {todos.map((todo, index) => (
                <Todo 
                  key={index} 
                  title={todo.title} 
                  content={todo.content} 
                  index={index} 
                  removeTodo={removeTodo} 
                />
            ))}
        </div>
    );
}

export default Todos;