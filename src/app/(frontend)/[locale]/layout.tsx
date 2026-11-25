import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'
import Link from 'next/link'

import NextTopLoader from 'nextjs-toploader'

export const metadata = {
	description: 'A blank template using Payload in a Next.js app.',
	title: 'Payload Blank Template',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
	// const { children } = props

	return (
		<html lang="uk">
			<body>
				<NextTopLoader
					color="#2563eb"
					initialPosition={0.08}
					crawlSpeed={200}
					height={5}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="0 0 10px #2563eb,0 0 5px #2563eb"
					// template='<div class="bar" role="bar"><div class="peg"></div></div>
					// <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
					zIndex={1600}
					showAtBottom={false}
				/>
				<Link href="/about">About</Link>
				{children}
			</body>
		</html>
	)
}
