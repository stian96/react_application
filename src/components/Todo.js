import React from 'react';

import '../scss/todo.scss';

const Todo = ({ title, content }) => {

    return (
        <div className='todo-card'>
            <h3 className='todo-card__item todo-card__item-title'>{title}</h3>
            <p className='todo-card__item todo-card__item-content'>{content}</p>
            <button className='todo-card__item todo-card__item-button' type="button">Complete</button>
        </div>
    );
}

export default Todo;