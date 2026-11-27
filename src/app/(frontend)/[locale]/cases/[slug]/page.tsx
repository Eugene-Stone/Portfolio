import { createMetadata, getPageData } from '@/api/api-server'
import { SITE_TITLE } from '@/CONSTANTS'
import { MetaProps, PageProps } from '@/TYPES'
import { getRelationItem, getRelationItems } from '@/utils/getRelation'
import { imageObj } from '@/utils/imageNormalize'
import RichText from '@/utils/RichText'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'

// 1. Set background revalidation interval (3600 sec = 1 hour)
export const revalidate = 3600

// 2. Allow dynamic generation for newly created CMS pages not built during compile time
export const dynamicParams = true

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const dataPage = await getPageData('cases', slug!, locale)
	const meta = dataPage?.meta

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function Case({ params }: PageProps) {
	const { locale, slug } = await params
	const dataPage = await getPageData('cases', slug!, locale)
	if (!dataPage) notFound()

	const structuredData = dataPage.meta?.structuredData
	const { title, description, image, typeProject, tags, textHtml } = dataPage

	const category = getRelationItem(typeProject)
	const tagItems = getRelationItems(tags)

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
				<section className="project-hero">
					<div className="container">
						<p className="eyebrow reveal is-visible">{category?.title}</p>
						<h1
							className="page-hero__title reveal is-visible"
							style={{ '--reveal-delay': '60ms' } as CSSProperties}
						>
							{title}
						</h1>

						{tagItems && (
							<div
								className="project-hero__meta reveal is-visible"
								style={{ '--reveal-delay': '120ms' } as CSSProperties}
							>
								{tagItems.map((tag, i) => {
									return (
										<span key={i} className="tag">
											{tag.title}
										</span>
									)
								})}
							</div>
						)}
						<div
							className="project-cover reveal is-visible"
							style={{ '--reveal-delay': '180ms' } as CSSProperties}
						>
							<Image
								src={imageObj(image).url}
								alt={imageObj(image).alt}
								width={1200}
								height={675}
								priority
								fetchPriority="high"
							/>
						</div>

						<RichText className="project-content">{textHtml}</RichText>
					</div>
				</section>
			</main>
		</>
	)
}
