import config from '@payload-config'
import { getPayload } from 'payload'

import { BACKEND_URL, FRONTEND_URL } from '@/CONSTANTS'
import { defaultLocale, Locale, locales, ogLocale } from '@/i18n/config'
import type { GeneralDatum, Page, Case } from '@/payload-types'
import { Metadata } from 'next'
import { SeoData } from '@/TYPES'

export function createMetadata(
	pageTitle: string,
	seo: SeoData,
	locale: Locale = defaultLocale,
	pathname = '/',
): Metadata {
	const {
		canonicalUrl,
		description,
		keywords,
		title,
		metaRobots,
		ogTitle,
		ogDescription,
		ogImage,
		twitterCard,
		twitterTitle,
		twitterDescription,
		twitterImage,
	} = seo

	const isNoIndex = metaRobots?.includes('noindex')
	const isNoFollow = metaRobots?.includes('nofollow')

	// // Формирование URL для OpenGraph и Twitter изображений(Этот способ для Strapi)
	// const resolveImageUrl = (image?: Media | null) => {
	// 	if (!image?.url) return '/images/logo.png'
	// 	return image.url.startsWith('http') ? image.url : `${BACKEND_URL}${image.url}`
	// }
	// const ogImageUrl = resolveImageUrl(ogImage as Media)
	// const twitterImageUrl = resolveImageUrl((twitterImage as Media) || (ogImage as Media))

	// Этот способ для Payload
	const ogImageObj = typeof ogImage === 'object' && ogImage !== null ? ogImage : null
	const twitterImageObj =
		typeof twitterImage === 'object' && twitterImage !== null ? twitterImage : null

	const ogImageUrl = ogImageObj?.url
	const twitterImageUrl = twitterImageObj?.url

	// Формирование URL для языковых версий страницы
	const baseUrl = FRONTEND_URL.replace(/\/$/, '')
	const cleanPath = pathname ? (pathname.startsWith('/') ? pathname : `/${pathname}`) : ''

	const languages = Object.fromEntries(
		locales.map((loc) => [loc, `${baseUrl}/${loc}${cleanPath}`]),
	) as Record<string, string>

	return {
		metadataBase: new URL(FRONTEND_URL),
		title: pageTitle,
		description: description,
		keywords: keywords,
		// viewport: metaViewport,
		icons: {
			icon: '/images/favicon.png',
		},
		alternates: {
			canonical: canonicalUrl || `${baseUrl}/${locale}${cleanPath}`,
			languages: {
				...languages,
				'x-default': `${baseUrl}/${defaultLocale}${cleanPath}`,
			},
		},
		robots: {
			index: !isNoIndex,
			follow: !isNoFollow,
		},
		openGraph: {
			title: ogTitle || pageTitle,
			description: ogDescription || description || '',
			url: canonicalUrl || FRONTEND_URL,
			siteName: pageTitle,
			type: 'website',
			locale: ogLocale[locale],
			images: ogImageUrl
				? [
						{
							url: ogImageUrl,
							width: ogImageObj?.width || 1200,
							height: ogImageObj?.height || 630,
							alt: ogImageObj?.alt || pageTitle,
						},
					]
				: [],
		},
		twitter: {
			card: twitterCard || 'summary_large_image',
			title: twitterTitle || pageTitle,
			description: twitterDescription || ogDescription || description || '',
			images: twitterImageUrl
				? [
						{
							url: twitterImageUrl,
							width: twitterImageObj?.width || 1200,
							height: twitterImageObj?.height || 630,
							alt: twitterImageObj?.alt || pageTitle,
						},
					]
				: ogImageUrl
					? [
							{
								url: ogImageUrl,
								width: ogImageObj?.width || 1200,
								height: ogImageObj?.height || 630,
								alt: ogImageObj?.alt || pageTitle,
							},
						]
					: [],
		},
	}
}

// Функция для получения данных с Payload через Payload SDK, которая может быть использована в getStaticProps или getServerSideProps
export async function getGeneralData(
	locale: Locale = defaultLocale,
	draft = false,
): Promise<GeneralDatum> {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })

	return (await payload.findGlobal({
		slug: 'generalData',
		depth: 2,
		locale,
		draft,
	})) as GeneralDatum
}

// Функция для получения данных через fetch, которая может быть использована в getStaticProps или getServerSideProps
export async function getGeneralDataFetch(locale: Locale = defaultLocale): Promise<GeneralDatum> {
	const headers = { 'Content-Type': 'application/json' }
	const apiUrl = `${BACKEND_URL}/api/globals/generalData?depth=2&draft=false&locale=${locale}`

	try {
		const response = await fetch(apiUrl, {
			method: 'GET',
			headers: headers,
		})

		// if (response.status === 404) {
		// 	notFound();
		// }

		if (!response.ok) {
			const errorData = await response.json()
			console.error('Payload Error Detail:', JSON.stringify(errorData, null, 2))
			throw new Error(errorData.error?.message ?? 'Failed to fetch General data')
		}

		return response.json()
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		} else {
			console.error(error)
		}

		throw new Error('Backend unavailable')
	}
}

// Функция для получения данных глобального объекта через Payload SDK, которая может быть использована в getStaticProps или getServerSideProps
import type { GlobalSlug, DataFromGlobalSlug } from 'payload'
export async function getGlobalData<T extends GlobalSlug>(
	slug: T,
	locale: Locale = defaultLocale,
	draft = false,
): Promise<DataFromGlobalSlug<T>> {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })

	return (await payload.findGlobal({
		slug: slug,
		depth: 2,
		locale,
		draft,
	})) as DataFromGlobalSlug<T>
}

// Функция для получения данных страницы через Payload SDK, которая может быть использована в getStaticProps или getServerSideProps
import type { CollectionSlug, DataFromCollectionSlug } from 'payload'
export async function getPageData<T extends CollectionSlug>(
	collection: T,
	slug: string,
	locale: Locale = defaultLocale,
	draft = false,
): Promise<DataFromCollectionSlug<T> | null> {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })

	const result = await payload.find({
		// collection: 'pages',
		collection: collection,
		depth: 2,
		locale,
		draft,
		limit: 1,
		pagination: false,
		where: {
			slug: {
				equals: slug,
			},
		},
	})

	return result.docs[0] ?? null
}
