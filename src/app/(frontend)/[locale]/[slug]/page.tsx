import { createMetadata, getGeneralData, getPageData } from '@/api/api-server'
import { SITE_TITLE } from '@/CONSTANTS'
import { Locale } from '@/i18n/config'
import { MetaProps } from '@/TYPES'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	// const { meta } = await getGeneralData(locale)
	const dataPage = await getPageData(slug!, locale)
	const meta = dataPage?.meta

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export type PageProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}

export default async function Page({ params }: PageProps) {
	const { locale, slug } = await params

	// console.log('locale', locale)
	// console.log('slug', slug)

	const dataPage = await getPageData(slug!, locale)

	// console.log('dataPage', dataPage)

	return (
		<main id="main">
			<div>{slug} - page</div>
			<Link href={`/`} className="btn btn--primary btn--lg">
				Homepage
			</Link>
		</main>
	)
}
