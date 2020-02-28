import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContentBox from '../shared/contentBox/ContentBox';
import { DEPOSIT } from '../../store/reducer';

const Deposit = () => {

	const dispatch = useDispatch();
	const storeCurrentBalance = useSelector(state => state.balance);

	const [ deposit, setDeposit ] = useState(0.0);
	const [ currentBalance, setCurrentBalance ] = useState(storeCurrentBalance);

	const handleChange = event => setDeposit(parseFloat(event.target.value));

	const handleSubmit = event => {
		event.preventDefault();
		dispatch({
			type: DEPOSIT,
			payload: deposit
		});
	};
	
	useEffect(() => {
		setCurrentBalance(storeCurrentBalance);
	}, [storeCurrentBalance]);

	return (
		<ContentBox
			pageLabel={ 'Deposit Here!' }
			inputName={ 'deposit' }
			buttonLabel={ 'Deposit Now' }
			onChange={ handleChange }
			onClick={ handleSubmit }
			balance={ currentBalance.toFixed(2) }
			showInputs={ true }
		/>
	);
};

export default Deposit;