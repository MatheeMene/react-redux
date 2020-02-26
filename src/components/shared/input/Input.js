import React from 'react';
import { bool, string, func } from 'prop-types';
import './Input.css';

const Input = ({
	inputName,
	disabled,
	placeholder,
	onChange
}) => (
	<input
		className='input-text'
		type={ 'number' }
		step='any'
		name={ inputName }
		disabled={ disabled }
		placeholder={ placeholder }
		onChange={ onChange }
	/>
);

Input.propTypes = {
	inputName: string,
	disabled: bool,
	placeholder: string,
	onChange: func
};

export default Input;