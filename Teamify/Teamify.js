import React, { useState, useEffect } from 'react'

import makeTeams from './makeTeams'
import SetupForm from './SetupForm'
import NameList from './NameList'
import TeamList from './TeamList'

function EmptyState() {
	return (
		<div className="columns">
			<div className="column">
				<div className="notification">Add some names to make some teams!</div>
			</div>
		</div>
	)
}

function RemakeTeamsButton({ names, numberOfTeams, setTeams }) {
	return (
		<div className="columns">
			<div className="column">
				<button
					className="button"
					onClick={() => {
						makeTeams({ names, numberOfTeams, setTeams })
					}}
				>
					Remake Teams
				</button>
			</div>
		</div>
	)
}

function Footer() {
	return (
		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					<a href="https://tweeres.ca">&copy; Tyler Weeres</a>
				</p>
				<p>
					Icon by <a href="https://www.flaticon.com/">Flaticon</a>
				</p>
			</div>
		</footer>
	)
}

function useSettings() {
	const [names, setNames] = useState([])
	const [loaded, setLoaded] = useState(false)
	const [numberOfTeams, setNumberOfTeams] = useState(2)

	function serializeSettings(names, numberOfTeams) {
		return JSON.stringify({ names, numberOfTeams })
	}

	function deserializeSettings(settingsJsonString) {
		return settingsJsonString
			? JSON.parse(settingsJsonString)
			: { names: [], numberOfTeams: 2 }
	}

	useEffect(() => {
		if (!loaded) {
			let storageResult = localStorage.getItem('settings')
			const { names, numberOfTeams } = deserializeSettings(storageResult)
			setNames(names)
			setNumberOfTeams(numberOfTeams)
			setLoaded(true)
		}
	}, [loaded, setLoaded, setNames, setNumberOfTeams])

	useEffect(() => {
		localStorage.setItem('settings', serializeSettings(names, numberOfTeams))
	}, [names, numberOfTeams])

	function clearNames() {
		setNames([])
	}

	return { names, setNames, clearNames, numberOfTeams, setNumberOfTeams }
}

export default function Teamify() {
	const { names, setNames, clearNames, numberOfTeams, setNumberOfTeams } =
		useSettings()
	const [newName, setNewName] = useState('')
	const [teams, setTeams] = useState([])

	useEffect(() => {
		makeTeams({
			names,
			numberOfTeams,
			setTeams,
		})
	}, [names, numberOfTeams])

	return (
		<>
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
							clearNames={clearNames}
						/>
					)}

					{teams.length > 0 && <TeamList teams={teams} />}

					{teams.length > 0 && (
						<RemakeTeamsButton
							names={names}
							numberOfTeams={numberOfTeams}
							setTeams={setTeams}
						/>
					)}

					{names.length === 0 && <EmptyState />}
				</div>
			</div>
			<Footer />
		</>
	)
}
