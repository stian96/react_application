import React, { useEffect, useState } from 'react';

import '../scss/todo.scss';

const Todo = ({ title, content, index, removeTodo }) => {
    const [show, setShow] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleRemove = () => {
        setIsRemoved(true);
        setTimeout(() => removeTodo(index), 300);
    }


    return (
        <div className={`todo-card ${show ? `show` : ``} ${isRemoved ? `remove` : ''}`}>
            <h3 className='todo-card__item todo-card__item-title'>{title}</h3>
            <p className='todo-card__item todo-card__item-content'>{content}</p>
            <button 
              className='todo-card__item todo-card__item-button' 
              onClick={handleRemove}
              type="button">Complete
            </button>
        </div>
    );
}

export default Todo;