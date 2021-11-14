import React from 'react';
import ArchiveIcon from '../images/archive.svg';

const ArchiveAllCard = () => {
	return (
		<div className='call-item' onClick={() => {}}>
			<div className='leadingIcon'>
				<ArchiveIcon />
			</div>
			<div className='call-info'>Archive all calls</div>
		</div>
	);
};

export default ArchiveAllCard;
