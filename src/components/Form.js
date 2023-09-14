import React, { useState } from 'react';

const Form = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Tittel: ${title}, Innhold: ${content}`);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='title'>
                <label className='title__item title__item-label' htmlFor='title'>Title</label>
                <input className='title__item title__item-input' type='text' id='title'value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='content'>
            <label className='content__item content__item-label' htmlFor='title'>Title</label>
                <input className='content__item content__item-input' type='text' id='title'value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            </div>
        </form>
    );
}

export default Form;