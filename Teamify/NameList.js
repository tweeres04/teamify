import React from 'react'

export default function NameList({ names, setNames, clearNames }) {
	return (
		<div className="columns">
			<div className="column">
				<h1 className="title is-5">
					{names.length} name{names.length !== 1 && 's'}
				</h1>
				<div className="columns">
					<div className="column is-narrow">
						<div className="tags">
							{names.map((n) => (
								<span className="tag is-medium" key={n}>
									{n}
									<button
										className="delete is-small"
										onClick={() => {
											const newNames = names.filter((name) => name !== n)
											setNames(newNames)
										}}
									/>
								</span>
							))}
						</div>
					</div>
					<div className="column">
						<button className="button is-small is-text" onClick={clearNames}>
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
