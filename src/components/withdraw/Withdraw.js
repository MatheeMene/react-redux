import React, { useState } from 'react';
import ContentBox from '../shared/contentBox/ContentBox';


const Withdraw = () => {

	const [ withdraw, setWithdraw ] = useState('');
	const [ currentBalance, setCurrenteBalance ] = useState('');

	const handleChange = event => setWithdraw(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
	}

	return (
		<ContentBox 
			pageLabel={ 'Withdraw Here!' }
			inputName={ 'Withdraw' }
			buttonLabel={ 'Withdraw Now' }
			onChange={ handleChange }
			onClick={ handleSubmit }
			balance={ currentBalance }
			showInputs={ true }
		/>
	);
};

export default Withdraw;