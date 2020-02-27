import React from 'react';
import { string, func } from 'prop-types';
import './Button.css';

const Button = ({ 
	buttonLabel,
	onClick,
	style
}) => (

	<button 
		className='button'
		onClick={ onClick }
		style={ style }
	>
		{ buttonLabel }
	</button>
);

Button.propTypes = {
	buttonLabel: string,
	onClick: func
}

export default Button;