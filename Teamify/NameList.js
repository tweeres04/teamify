import React from 'react';

export default function NameList({
	names,
	setNames,
	numberOfTeams,
	setTeams,
	makeTeams
}) {
	return (
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
	);
}
