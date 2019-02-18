import React from 'react';
import ReactDOM from 'react-dom';
import Teamify, { makeTeams } from './Teamify';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Teamify />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('makeTeams handles team number close to number of players', () => {
	const names = ['Ty', 'Nad', 'Coose', 'Scara', 'Fox', 'Mo', 'Lauren'];
	const numberOfTeams = 4;

	makeTeams({
		names,
		numberOfTeams,
		setTeams: teams => {
			expect(teams).toHaveLength(4);
		}
	});
});

test("makeTeams won't make more teams than players", () => {
	const names = ['Ty', 'Nad'];
	const numberOfTeams = 4;

	makeTeams({
		names,
		numberOfTeams,
		setTeams: teams => {
			expect(teams).toHaveLength(2);
		}
	});
});
