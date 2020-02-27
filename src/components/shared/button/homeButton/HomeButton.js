import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = ({ style }) => (

    <Link 
        to='/'
        className='button-home'
        style={ style }
    >
        Go Home!
    </Link>
);

export default HomeButton;