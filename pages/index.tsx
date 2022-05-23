import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import heroImage from '../public/hero.png'

export default function Home() {
	return (
		<>
			<Head>
				<title>Teamify - Random team generator app</title>
				<meta
					name="description"
					content="A quick way to build random teams with your friends (or enemies). The funny names are a bonus. No app to install."
				/>
				<link rel="icon" href="/team.png" />
				<link rel="shortcut icon" href="/team.png" />
				<meta name="theme-color" content="#6ABBEB" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<div className="hero is-halfheight is-primary">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered">
							<div className="column">
								<h1 className="title">Make teams. Settle the score.</h1>
								<h2 className="subtitle">
									Enter your friends' names along with how many teams you need,
									and Teamify randomizes them — fast.
								</h2>
								<Link href="/app">
									<a className="button is-primary is-large is-inverted">
										Make some teams →
									</a>
								</Link>
							</div>
							<div className="column">
								<div className="columns">
									<div className="column is-half mx-auto">
										<Link href="/app">
											<a>
												<Image
													src={heroImage}
													alt="Teamify app with two teams generated from six names"
												/>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="footer">
				<div className="content has-text-centered">
					<div>Teamify by</div>
					<div>
						<a href="https://tweeres.ca">Tyler Weeres</a>
					</div>
				</div>
			</footer>
		</>
	)
}
