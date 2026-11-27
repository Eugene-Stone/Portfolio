import { createMetadata, getGlobalData, getPageData } from '@/api/api-server'
import { SITE_TITLE } from '@/CONSTANTS'
import { Locale } from '@/i18n/config'
import { MetaProps, PageProps } from '@/TYPES'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	// const { meta } = await getGlobalData('generalData', locale)
	const dataPage = await getGlobalData('generalData', locale)
	const meta = dataPage?.meta

	const pageTitle =
		meta?.title + ' - Cases' || meta?.ogTitle + ' - Cases' || SITE_TITLE + ' - Cases' || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function Page({ params }: PageProps) {
	const { locale, slug = 'cases' } = await params

	return (
		<main id="main">
			<div>{slug} - page</div>
			<Link href={`/`} className="btn btn--primary btn--lg">
				Homepage
			</Link>
		</main>
	)
}
