import React, { useState } from 'react';
import Input from '../shared/input/Input';
import Button from '../shared/button/Button';
import './Deposit.css';

const Deposit = () => {

	const [ balance, setBalance ] = useState('');

	const handleChange = event => setBalance(event.target.value);

	return (
		<div className='deposit-page'>
			<div className='deposit-box'>

				<h1>Deposit Here!</h1>
				<p className='show-balance'><span className='balance-text'>Balance</span> R$ { balance === '' ? 0 : balance }</p>

				<div className='deposit-block'>
					<p className='how-much'>⇣How Much⇣</p>
					<Input 
						type={ 'text' }
						name={ 'deposit' }
						disabled={ false }
						placeholder={ '5.00' }
						onChange={ event => handleChange(event) }
						value={ balance }
					/>
					<Button 
						label={ 'Deposit Now' }
					/>
				</div>
			</div>
		</div>
	);
}

export default Deposit;