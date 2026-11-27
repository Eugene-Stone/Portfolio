import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'

import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { createMetadata, getGeneralData } from '@/api/api-server'

import { Metadata } from 'next'
import { SITE_TITLE } from '@/CONSTANTS'
import { MetaProps } from '@/TYPES'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const { meta } = await getGeneralData(locale)

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export default async function HomePage() {
	// const headers = await getHeaders()
	// const payloadConfig = await config
	// const payload = await getPayload({ config: payloadConfig })
	// const { user } = await payload.auth({ headers })

	// console.log('headers', headers)
	// console.log('payloadConfig', payloadConfig)
	// console.log('payload', payload)
	// console.log('user', user)

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
		<main id="main" tabIndex={-1}>
			<div className="container">
				<h1>Homepage</h1>
				<div style={{ maxWidth: 500 }}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis cumque
						consequuntur nam praesentium voluptatem! Necessitatibus, eligendi at? Saepe ex delectus
						ducimus cupiditate fuga harum maiores, accusamus enim sed eius blanditiis nam ea tenetur
						dolores officiis rerum. Assumenda, officia. Ipsa rem distinctio dicta, animi at
						architecto temporibus quam ad amet ipsum, dolores eveniet reiciendis, mollitia
						voluptates nisi laborum dolor voluptatum facilis eos? Alias labore deserunt provident
						eius sequi quisquam quis harum nemo! Debitis, sapiente fuga. Omnis, deleniti facere
						exercitationem in aliquid deserunt quisquam laboriosam modi ad reiciendis, aliquam
						corporis nemo officia earum, assumenda laudantium? Ea nam odio, quia hic officiis aut
						praesentium. Numquam soluta esse eius error adipisci ipsum eaque iure nostrum ea ipsa
						nesciunt deleniti magni tempora sunt corporis quasi inventore aut debitis sequi, dicta
						in voluptatibus quisquam. Nesciunt sed et veniam atque doloribus porro pariatur.
						Voluptatem perspiciatis fuga labore mollitia, tempore repudiandae est reprehenderit
						expedita aperiam exercitationem, voluptas eius fugit maxime nulla. Obcaecati vel
						perspiciatis eligendi non dolorum nihil accusantium, autem voluptatibus deleniti beatae
						earum sint numquam consectetur dolorem, corporis labore. Tempora nobis tempore deserunt
						magnam explicabo sunt exercitationem impedit deleniti praesentium consectetur non
						repudiandae ad expedita ipsam recusandae vel reiciendis id, minima adipisci similique
						incidunt? Enim ea ullam officia facilis est itaque, pariatur voluptatibus impedit qui
						neque incidunt aspernatur voluptatum. Pariatur cum illo, id ipsum dolorem magni
						voluptatum ab voluptates optio mollitia sequi molestiae, perferendis nobis ex recusandae
						quos doloremque. Ipsam rem consequuntur placeat non veniam! Ex, corporis fugiat placeat,
						eaque aliquid totam in quia quis ea consequuntur non aut possimus omnis velit temporibus
						sequi dolorum eos id illo laborum fuga. Sit, consequatur quo est repudiandae labore eius
						vel maiores, molestias maxime a doloribus quod totam illo corrupti nobis nostrum qui
						nisi! Suscipit hic sint culpa amet? Dolorem, earum itaque, ullam necessitatibus in
						officia corporis iure tempora, blanditiis ab aperiam suscipit temporibus deserunt
						obcaecati sit totam numquam quisquam accusamus consequatur beatae. Dignissimos excepturi
						animi nihil totam quibusdam necessitatibus dolores dolorem nam laboriosam recusandae
						voluptatum perferendis quisquam beatae ut aliquam neque facilis dolore saepe autem,
						architecto consequatur voluptates explicabo molestiae odit! Soluta animi, earum
						temporibus necessitatibus alias quod ipsam odit voluptatum minima labore cupiditate id
						error repudiandae explicabo ea nesciunt dolorem perspiciatis eius distinctio. Quam ea
						laborum temporibus dolorem assumenda amet quos, adipisci culpa voluptates voluptatem
						obcaecati non voluptate omnis laboriosam eaque id fugit perferendis fugiat possimus
						porro unde quas! Fugiat expedita, rerum excepturi, maxime accusamus incidunt dignissimos
						itaque quaerat obcaecati delectus et sed sint hic corrupti, officia nisi voluptatum
						nostrum ab quod pariatur corporis iure vel totam. Dicta ut placeat eum numquam atque
						quos delectus, nulla libero exercitationem, officia rem earum et mollitia. Ullam
						aspernatur facere dolor, voluptatem eum tempore doloremque nostrum voluptatum quam
						labore est! Aut alias, reprehenderit eveniet maxime reiciendis eos? Nobis modi culpa a
						perferendis delectus animi asperiores nesciunt maxime! Nisi, quae. Totam veritatis modi
						nesciunt consequuntur blanditiis, et rem dolorum ex corporis vel repellendus minima
						voluptate non, quidem sint incidunt. Ea consectetur, repudiandae voluptatem deleniti
						necessitatibus quaerat eligendi ad ipsum temporibus in id.
					</p>
				</div>
			</div>
			{/* 
				{!user && <h1>Welcome to your new project.</h1>}
				{user && <h1>Welcome back, {user.email}</h1>}
				<a className="admin" href={payloadConfig.routes.admin} target="_blank" >
					Go to admin panel
				</a> 
			*/}
		</main>
	)
}
