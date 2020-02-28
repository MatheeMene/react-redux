import { func, string } from 'prop-types';
import React from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import HomeButton from '../button/homeButton/HomeButton';
import './ContentBox.css';

const ContentBox = ({ 
	pageLabel,
	inputName,
	onChange,
	onClick,
	buttonLabel,
	balance,
	showInputs
}) => (

	<div className='content-box-page'>
		<div className='content-box'>

			<h1>{ pageLabel }</h1>
			<p className='show-balance'>Balance: <span>R$ { balance } </span></p>
			{ showInputs &&
				<div className='content-block'>
					<p className='how-much'>⇣How Much⇣</p>
					<Input
						inputName={ inputName }
						disabled={ false }
						placeholder={ 'R$ 5.00' }
						onChange={ onChange }
					/>
					<Button 
						buttonLabel={ buttonLabel }
						onClick={ onClick }
					/>
				</div>
			}
		</div>
		<HomeButton style={{ marginLeft: '36%' }} />
	</div>
);

ContentBox.propTypes = {
	pageLabel: string,
	balance: string,
	inputName: string,
	onChange: func,
	onClick: func,
	buttonLabel: string
};

export default ContentBox;