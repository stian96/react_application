import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Button from './components/Button';
import Todo from './components/Todo';

import './App.scss';



const App = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        setTodos([...todos, {title, content }]);
        setTitle('');
        setContent('');
    }

    return (
        <>
        <Navbar />
        <Form 
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
        />
        <Button onClick={handleSubmit}/>
        <h2>My Todos</h2>
        <div className='todo-list'>
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} content={todo.content} />
            ))}
        </div>
        </>
    );
}

export default App;