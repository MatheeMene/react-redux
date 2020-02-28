import React from 'react';
import { useSelector } from 'react-redux';
import ContentBox from '../shared/contentBox/ContentBox';

const Balance = () => {

	const balance = useSelector(state => parseFloat(state.balance));

	return (
		<ContentBox 
			pageLabel={ 'View Balance!' }
			balance={ balance.toFixed(2) }
			showInputs={ false }
		/>
	);
}

export default Balance;