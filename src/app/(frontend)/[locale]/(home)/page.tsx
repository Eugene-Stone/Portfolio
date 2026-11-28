import { createMetadata, getGlobalData } from '@/api/api-server'

import { Metadata } from 'next'
import { SITE_TITLE } from '@/CONSTANTS'
import { MetaProps, PageProps } from '@/TYPES'
import { notFound } from 'next/navigation'
import DynamicSections from '@/components/Sections/DynamicSections'

// Страница с проверкой сессии должна быть динамической
export const dynamic = 'force-dynamic' // 'force-dynamic' || 'force-static';
export const revalidate = 600 // Пересборка каждые (600 sec = 10 min), работает если выбрано 'force-static'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const { meta } = await getGlobalData('homePage', locale)

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function HomePage({ params }: PageProps) {
	const { locale } = await params
	const dataPage = await getGlobalData('homePage', locale)
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

			<main id="main" tabIndex={-1}>
				<DynamicSections locale={locale} sections={sections} />
			</main>
		</>
	)
}
