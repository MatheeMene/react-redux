import React, { useState } from 'react';
import ContentBox from '../shared/contentBox/ContentBox';
import { useSelector } from 'react-redux';

const View = () => {

	const balance1 = useSelector(state => state.balance);
	const [ balance, setBalance ] = useState('');

	return (
		<ContentBox 
			pageLabel={ 'View Balance!' }
			balance={ balance }
			showContent={ false }
		/>
	);
}

export default View;