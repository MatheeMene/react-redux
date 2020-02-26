import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
	<div className='navbar'>
		<Link to='/deposit'>
			Deposit
		</Link>
		<Link to='/withdraw'>
			Withdraw
		</Link>
		<Link to='/view'>
			View
		</Link>
	</div>
);

export default Header;