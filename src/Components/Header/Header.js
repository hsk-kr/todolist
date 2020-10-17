import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Header = () => {
	return (
		<div className="header">
			<h1 className="header-left">
				<CheckIcon />
				To Do List
			</h1>
			<div className="header-right">
				<span className="header-right__txt">
					Hello, {'채은'}!
				</span>
				<div className="header-right__photo-wrap">
					<PersonOutlineIcon />
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
