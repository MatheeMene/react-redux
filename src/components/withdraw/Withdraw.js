import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContentBox from '../shared/contentBox/ContentBox';
import { WITHDRAW } from '../../store/reducer';

const Withdraw = () => {

	const dispatch = useDispatch();
	const storeCurrentBalance = useSelector(state => state.balance);

	const [ withdraw, setWithdraw ] = useState('');
	const [ currentBalance, setCurrentBalance ] = useState(storeCurrentBalance);

	const handleChange = event => {
		setWithdraw(parseFloat(event.target.value));
	}

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({ 
			type: WITHDRAW,
			payload: withdraw
		});
	};

	useEffect(() => {
		setCurrentBalance(storeCurrentBalance);
	}, [storeCurrentBalance]);

	return (
		<ContentBox 
			pageLabel={ 'Withdraw Here!' }
			inputName={ 'Withdraw' }
			buttonLabel={ 'Withdraw Now' }
			onChange={ handleChange }
			onClick={ handleSubmit }
			balance={ currentBalance.toFixed(2) }
			showInputs={ true }
		/>
	);
};

export default Withdraw;