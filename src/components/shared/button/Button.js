import React from 'react';
import { string, func } from 'prop-types';
import './Button.css';

const Button = ({ label, onClick }) => (

	<button 
		className='button'
		onClick={ onClick }
	>
		{ label }
	</button>
);

Button.propTypes = {
	label: string,
	onClick: func
}

export default Button;