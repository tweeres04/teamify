import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

import makeTeams from './makeTeams';
import SetupForm from './SetupForm';
import NameList from './NameList';
import TeamList from './TeamList';

function EmptyState() {
	return (
		<div className="columns">
			<div className="column">
				<div className="notification">Add some names to make some teams!</div>
			</div>
		</div>
	);
}

function RemakeTeamsButton({ names, numberOfTeams, setTeams }) {
	return (
		<div className="columns">
			<div className="column">
				<button
					className="button"
					onClick={() => {
						makeTeams({ names, numberOfTeams, setTeams });
					}}
				>
					Remake Teams
				</button>
			</div>
		</div>
	);
}

export default function Teamify() {
	const [names, setNames] = useState([]);
	const [newName, setNewName] = useState('');
	const [numberOfTeams, setNumberOfTeams] = useState(2);
	const [teams, setTeams] = useState([]);

	return (
		<div className="section">
			<div className="container">
				<h1 className="title">Teamify</h1>

				<SetupForm
					names={names}
					setNames={setNames}
					newName={newName}
					setNewName={setNewName}
					numberOfTeams={numberOfTeams}
					setNumberOfTeams={setNumberOfTeams}
					teams={teams}
					setTeams={setTeams}
					makeTeams={makeTeams}
				/>

				{names.length > 0 && (
					<NameList
						names={names}
						setNames={setNames}
						numberOfTeams={numberOfTeams}
						setTeams={setTeams}
						makeTeams={makeTeams}
					/>
				)}

				{teams.length > 0 && <TeamList teams={teams} />}

				{teams.length > 0 && <RemakeTeamsButton />}

				{names.length === 0 && <EmptyState />}
			</div>
		</div>
	);
}
