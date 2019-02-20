import React, { useState } from 'react';
import _shuffle from 'lodash/shuffle';
import _startCase from 'lodash/startCase';
import namor from 'namor';
import 'bulma/css/bulma.min.css';

export function makeTeams({ names, numberOfTeams, setTeams }) {
	numberOfTeams = numberOfTeams || 1;
	const shuffledNames = _shuffle(names);
	const teams = shuffledNames.reduce((teams, name, i) => {
		const teamIndex = i % numberOfTeams;
		teams[teamIndex] = [...teams[teamIndex], name];
		return teams;
	}, Array.from({ length: Math.min(numberOfTeams, names.length) }).fill([]));

	const teamsWithNames = teams.map(t => ({
		name: _startCase(namor.generate({ numbers: 0, char: ' ', manly: true })),
		team: t
	}));

	setTeams(teamsWithNames);
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
				<form
					onSubmit={e => {
						e.preventDefault();
						const newNames = newName ? [...names, newName] : names;
						setNames(newNames);
						makeTeams({ names: newNames, numberOfTeams, setTeams });
						setNewName('');
					}}
				>
					<div className="columns is-mobile">
						<div className="column">
							<div className="field">
								<label htmlFor="newName">New name</label>
								<div className="control">
									<input
										id="newName"
										className="input"
										value={newName}
										onChange={e => setNewName(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="column is-one-quarter">
							<div className="field">
								<label htmlFor="numberOfTeams">Teams</label>
								<div className="control">
									<input
										type="number"
										id="numberOfTeams"
										className="input"
										value={numberOfTeams}
										onChange={e => {
											const newNumberOfTeams =
												e.target.value === ''
													? e.target.value
													: e.target.valueAsNumber > 0
													? e.target.valueAsNumber
													: 1;
											setNumberOfTeams(newNumberOfTeams);
											makeTeams({
												names,
												numberOfTeams: newNumberOfTeams,
												setTeams
											});
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<div className="field">
								<div className="control">
									<button className="button is-primary is-fullwidth is-large">
										Add name
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>

				{names.length === 0 && (
					<div className="columns">
						<div className="column">
							<div className="notification">
								Add some names to make some teams!
							</div>
						</div>
					</div>
				)}

				{names.length > 0 && (
					<div className="columns">
						<div className="column">
							<h1 className="title is-5">
								{names.length} name{names.length !== 1 && 's'}
							</h1>
							<div className="tags">
								{names.map(n => (
									<span className="tag is-medium" key={n}>
										{n}
										<button
											className="delete is-small"
											onClick={() => {
												const newNames = names.filter(name => name !== n);
												setNames(newNames);
												makeTeams({
													names: newNames,
													numberOfTeams,
													setTeams
												});
											}}
										/>
									</span>
								))}
							</div>
						</div>
					</div>
				)}

				<div className="columns">
					<div className="column">
						{teams.map(({ name, team }, i) => (
							<div className="columns" key={i}>
								<div className="column">
									<div className="card">
										<div className="card-content">
											<h1 className="title is-5">
												Team {i + 1} - {name}
											</h1>
											<ul>
												{team.map(t => (
													<li key={t}>{t}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{teams.length > 0 && (
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
				)}
			</div>
		</div>
	);
}
