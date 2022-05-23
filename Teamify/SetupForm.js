import React from 'react';

export default function SetupForm({
	names,
	setNames,
	newName,
	setNewName,
	numberOfTeams,
	setNumberOfTeams,
	teams,
	setTeams,
	makeTeams
}) {
	return (
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
	);
}
