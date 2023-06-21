import Head from 'next/head'

import Teamify from '../Teamify/Teamify'

export default function Page({ deferredInstallPrompt }) {
	return (
		<>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<Teamify deferredInstallPrompt={deferredInstallPrompt} />
		</>
	)
}
