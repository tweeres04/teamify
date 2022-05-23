import _shuffle from 'lodash/shuffle';
import _startCase from 'lodash/startCase';
import namor from 'namor';

export default function makeTeams({ names, numberOfTeams, setTeams }) {
	numberOfTeams = numberOfTeams || 1;
	const shuffledNames = _shuffle(names);
	const teams = shuffledNames.reduce((teams, name, i) => {
		const teamIndex = i % numberOfTeams;
		teams[teamIndex] = [...teams[teamIndex], name];
		return teams;
	}, Array.from({ length: Math.min(numberOfTeams, names.length) }).fill([]));

	const teamsWithNames = teams.map(t => ({
		name: _startCase(namor.generate({ numbers: 0, char: ' ', saltLength: 0, subset: 'manly' })),
		team: t
	}));

	setTeams(teamsWithNames);
}
