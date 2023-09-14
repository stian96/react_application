import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Button from './components/Button';
import Todos from './components/Todos';

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

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
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
        { todos.length > 0 && <h2>My Todos</h2>}
        <Todos 
          todos={todos}
          removeTodo={removeTodo}
        />
        </>
    );
}

export default App;