import { createMetadata, getPageData } from '@/api/api-server'
import DynamicSections from '@/components/Sections/DynamicSections'
import { SITE_TITLE } from '@/CONSTANTS'
import { MetaProps, PageProps } from '@/TYPES'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// 1. Set background revalidation interval (3600 sec = 1 hour)
export const revalidate = 3600

// 2. Allow dynamic generation for newly created CMS pages not built during compile time
export const dynamicParams = true

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const dataPage = await getPageData('pages', slug!, locale)
	const meta = dataPage?.meta

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function Page({ params }: PageProps) {
	const { locale, slug } = await params
	const dataPage = await getPageData('pages', slug!, locale)
	if (!dataPage) notFound()

	const structuredData = dataPage.meta?.structuredData
	const { sections } = dataPage ?? {}

	// console.log('dataPage', dataPage)

	return (
		<>
			{structuredData && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: structuredData.replace(/</g, '\\u003c'), // Защита от XSS
					}}
				/>
			)}

			<main id="main">
				<DynamicSections locale={locale} sections={sections} />
			</main>
		</>
	)
}
