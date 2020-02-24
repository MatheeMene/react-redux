import React, { useState } from 'react';
import ContentBox from '../shared/contentBox/ContentBox';

const Take = () => {

	const [ balance, setBalance ] = useState('');
	const [ currentBalance, setCurrenteBalance ] = useState('');

	const handleChange = event => setBalance(event.target.value);

	const handleSubmit = event => {

		event.preventDefault();
		setCurrenteBalance(currentBalance - balance);
	}

	return (
		<ContentBox 
			pageLabel={ 'Take Here!' }
			inputName={ 'take' }
			buttonLabel={ 'Take Now' }
			onChange={ handleChange }
			onClick={ handleSubmit }
			balance={ currentBalance }
			showContent={ true }
		/>
	);
};

export default Take;