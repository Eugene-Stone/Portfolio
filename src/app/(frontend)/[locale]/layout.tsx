import { createMetadata, getGeneralData, MetaProps } from '@/api/api-server'
import { BACKEND_URL, FRONTEND_URL, SITE_TITLE } from '@/CONSTANTS'
import { Locale } from '@/i18n/config'
import { Media } from '@/payload-types'
import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'
import { Metadata } from 'next'

import Link from 'next/link'
import NextTopLoader from 'nextjs-toploader'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const { meta } = await getGeneralData(locale)

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
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
				<Link href="/contacts">Contacts</Link>
				{children}
			</body>
		</html>
	)
}
