import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'

import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { createMetadata, getGeneralData, MetaProps } from '@/api/api-server'

import { Metadata } from 'next'
import { SITE_TITLE } from '@/CONSTANTS'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const { meta } = await getGeneralData(locale)

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function HomePage() {
	const headers = await getHeaders()
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const { user } = await payload.auth({ headers })

	const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

	// console.log('headers', headers)
	// console.log('user', user)
	// console.log('payloadConfig', payloadConfig)
	// console.log('payload', payload)
	// console.log('fileURL', fileURL)

	// const general = await getGeneralData('uk')

	// console.log('general', general)

	// const cases = await payload.find({
	// 	collection: 'cases',
	// 	depth: 2,
	// 	locale: 'uk',
	// 	draft: false,
	// })

	// const homePage = await payload.findGlobal({
	// 	slug: 'homePage',
	// 	depth: 2,
	// 	locale: 'uk',
	// 	draft: false,
	// })

	// console.log('homePage', homePage)
	// console.log('cases', cases)

	// const image = posts.docs[0].image

	// const imageUrl = posts.docs[0].image?.url
	// const imageUrl = typeof image === 'object' && image !== null ? image.url : null
	// console.log('imageUrl', imageUrl)

	return (
		<div className="home">
			<div className="content">
				<picture>
					<source srcSet="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg" />
					<Image
						alt="Payload Logo"
						height={65}
						src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg"
						width={65}
					/>
				</picture>
				{!user && <h1>Welcome to your new project.</h1>}
				{user && <h1>Welcome back, {user.email}</h1>}
				<div className="links">
					<a
						className="admin"
						href={payloadConfig.routes.admin}
						rel="noopener noreferrer"
						target="_blank"
					>
						Go to admin panel
					</a>
					<a
						className="docs"
						href="https://payloadcms.com/docs"
						rel="noopener noreferrer"
						target="_blank"
					>
						Documentation
					</a>
				</div>
			</div>
			<div className="footer">
				<p>Update this page by editing</p>
				<a className="codeLink" href={fileURL}>
					<code>app/(frontend)/page.tsx</code>
				</a>
			</div>
		</div>
	)
}
