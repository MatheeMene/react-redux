import React from 'react';
import { string, func } from 'prop-types';
import './Button.css';

const Button = ({ buttonLabel, onClick }) => (

	<button 
		className='button'
		onClick={ onClick }
	>
		{ buttonLabel }
	</button>
);

Button.propTypes = {
	label: string,
	onClick: func
}

export default Button;