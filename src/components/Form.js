import React from 'react';
import '../scss/form.scss';

const Form = ({ title, setTitle, content, setContent }) => {

    return (
        <form>
            <div className='title'>
                <label className='title__item title__item-label' htmlFor='title'>Title</label>
                <textarea 
                  className='title__item title__item-input' 
                  type='text' 
                  id='title' 
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className='content'>
            <label className='content__item content__item-label' htmlFor='title'>Content</label>
                <textarea 
                  className='content__item content__item-input' 
                  type='text' 
                  id='title'
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
            </div>
        </form>
    );
}

export default Form;