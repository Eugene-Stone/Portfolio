import { PropsSection } from '@/TYPES'
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function Marquee({ locale, dict, data }: PropsSection<'marquee'>) {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })

	// const tags = await payload.find({
	// 	collection: 'tagsFrontend',
	// 	depth: 2,
	// 	locale:locale,
	// 	pagination: false,
	// 	draft: false,
	// })

	const [frontendRes, backendRes] = await Promise.all([
		payload.find({
			collection: 'tagsFrontend',
			depth: 2,
			locale,
			pagination: false,
			draft: false,
		}),
		payload.find({
			collection: 'tagsBackend',
			depth: 2,
			locale,
			pagination: false,
			draft: false,
		}),
	])

	// const tags = [...frontendRes.docs, ...backendRes.docs]

	function shuffleArray<T>(items: readonly T[]): T[] {
		const result = [...items]

		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[result[i], result[j]] = [result[j], result[i]]
		}

		return result
	}

	const tags = shuffleArray([...frontendRes.docs, ...backendRes.docs])

	return (
		<section className="marquee" aria-label="Технології">
			<div className="marquee__track">
				{tags && (
					<div className="marquee__group">
						{tags.map((tag, i) => {
							return <span key={i}>{tag.title}</span>
						})}
					</div>
				)}
			</div>
		</section>
	)
}
