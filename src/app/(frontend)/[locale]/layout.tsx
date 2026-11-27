import { SITE_TITLE } from '@/CONSTANTS'
import { createMetadata, getGlobalData } from '@/api/api-server'

import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'

import Header from '@/components/_layout/Header/Header'
import Footer from '@/components/_layout/Footer/Footer'

import { MetaProps } from '@/TYPES'
import { Locale, getDictionary } from '@/i18n/config'

import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	// const { meta } = await getGlobalData('generalData', locale)
	const dataPage = await getGlobalData('generalData', locale)
	const meta = dataPage?.meta

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export type RootProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}
// export default async function RootLayout({ children }: LayoutProps<'/'>) {
export default async function RootLayout({ children, params }: RootProps) {
	const { locale, slug } = await params
	const generalData = await getGlobalData('generalData', locale)
	const dict = await getDictionary(locale)

	return (
		<html lang={locale}>
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
					zIndex={1600}
					showAtBottom={false}
				/>

				{/* 	<a className="skip-link" href="#main">
					{dict['skip-links'].skipToContent}
				</a> */}

				<Header generalData={generalData} locale={locale} dict={dict} />
				{children}
				<Footer generalData={generalData} locale={locale} dict={dict} />
			</body>
		</html>
	)
}
