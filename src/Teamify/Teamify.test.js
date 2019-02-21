import React from 'react';
import ReactDOM from 'react-dom';
import Teamify from './Teamify';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Teamify />, div);
	ReactDOM.unmountComponentAtNode(div);
});
