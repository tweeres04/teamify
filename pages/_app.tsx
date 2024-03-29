import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import '../styles/teamify.scss'

export interface BeforeInstallPromptEvent extends Event {
	prompt: () => void
}

function useDeferredInstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] =
		useState<BeforeInstallPromptEvent>()
	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault()
			setDeferredPrompt(e as BeforeInstallPromptEvent)
		})
	}, [])

	return deferredPrompt
}

function MyApp({ Component, pageProps }: AppProps) {
	const deferredInstallPrompt = useDeferredInstallPrompt()

	pageProps = {
		...pageProps,
		deferredInstallPrompt,
	}

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
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-JB7FG6K9B2"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-JB7FG6K9B2');
						`,
					}}
				></script>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
