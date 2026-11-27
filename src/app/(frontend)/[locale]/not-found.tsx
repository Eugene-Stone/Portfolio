import { headers as getHeaders } from 'next/headers.js'
import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'

// Страница с проверкой сессии должна быть динамической
export const dynamic = 'force-dynamic' // 'force-dynamic' || 'force-static';
export const revalidate = 600 // Пересборка каждые (600 sec = 10 min), работает если выбрано 'force-static'

export default async function NotFound() {
	const headers = await getHeaders()
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const { user } = await payload.auth({ headers })

	// console.log('headers', headers) // Вызывает ошибку на 404 странице
	// console.log('payloadConfig', payloadConfig)
	// console.log('payload', payload)
	// console.log('user', user)

	// const pages = await payload.find({
	// 	collection: 'pages',
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

	return (
		<main id="main" data-page-is={'not-found'}>
			<div className="page-hero sect-404">
				<div className="container">
					<h1 className="page-hero__title reveal is-visible">404 not found</h1>
					<br />
					<div className="btn-more-wrap center">
						<Link href={`/`} className="btn btn--primary btn--lg">
							Homepage
						</Link>
					</div>

					{/* {!user && <h1>Welcome to your new project.</h1>} */}
					{user && (
						<>
							<br />
							<br />
							<h3 style={{ marginBottom: 10 }}>Welcome back, {user.email}</h3>
							<a className="btn btn--ghost" href={payloadConfig.routes.admin} target="_blank">
								Go to admin panel
							</a>
						</>
					)}
				</div>
			</div>
		</main>
	)
}
