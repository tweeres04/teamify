import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/teamify.scss'

function MyApp({ Component, pageProps }: AppProps) {
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
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
