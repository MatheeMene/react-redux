import React, { useState } from 'react';
import Input from '../shared/input/Input';
import Button from '../shared/button/Button';
import './Take.css';

const Take = () => {

	const [ balance, setBalance ] = useState('');

	const handleChange = event => setBalance(event.target.value);

	return (
		<div className='take-page'>
			<div className='take-box'>

				<h1>Take Here!</h1>
				<p className='show-balance'><span className='balance-text'>Balance</span> R$ { balance === '' ? 0 : balance }</p>

				<div className='deposit-block'>
					<p className='how-much'>⇣How Much⇣</p>
					<Input 
						type={ 'text' }
						name={ 'take' }
						disabled={ false }
						placeholder={ '5.00' }
						onChange={ event => handleChange(event) }
						value={ balance }
					/>
					<Button 
						label={ 'Take Now' }
					/>
				</div>
			</div>
		</div>
	);
};

export default Take;