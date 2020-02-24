import React, { useState } from 'react';
import ContentBox from '../shared/contentBox/ContentBox';

const Deposit = () => {

	const [ balance, setBalance ] = useState('');
	const [ currentBalance, setCurrentBalance ] = useState('');

	const handleChange = event => {
		setBalance(event.target.value);
	}

	const handleSubmit = event => {
		event.preventDefault();
		setCurrentBalance(balance);
	}

	return (
		<ContentBox
			pageLabel={ 'Deposit Here!' }
			inputName={ 'deposit' }
			buttonLabel={ 'Deposit Now' }
			onChange={ handleChange }
			onClick={ handleSubmit }
			balance={ currentBalance }
			showContent={ true }
		/>
	);
};

export default Deposit;