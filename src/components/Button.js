import React from 'react';
import '../scss/button.scss';

const Button = ({ onClick }) => {

    return (
        <>
        <button className='add-button'type='button' onClick={onClick}>
            Add
        </button>
        </>
    );
}

export default Button;