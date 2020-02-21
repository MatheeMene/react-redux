import React from 'react';
import { bool, string, func } from 'prop-types';
import './Input.css';

const Input = ({
	type,
	inputName,
	disabled,
	placeholder,
	value,
	onChange
}) => (
	<input
		className='input-text'
		type={ type }
		name={ inputName }
		disabled={ disabled }
		placeholder={ placeholder }
		onChange={ onChange }
		value={ value }
	/>
);

Input.propTypes = {
	type: string,
	inputName: string,
	disabled: bool,
	placeholder: string,
	value: string,
	onChange: func
};

export default Input;