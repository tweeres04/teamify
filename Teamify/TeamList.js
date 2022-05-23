import React from 'react';

export default function TeamList({ teams }) {
	return (
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
	);
}
