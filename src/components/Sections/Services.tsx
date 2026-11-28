import { PropsSection } from '@/TYPES'
import { formatHighlightedText } from '@/utils/formatHighlightedText'
import { imageObj } from '@/utils/imageNormalize'
import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export default async function Services({ locale, dict, data }: PropsSection<'services'>) {
	const { subTitle, title, description, servicesCards, id_anchor } = data
	return (
		<section className="section" id={id_anchor || undefined}>
			<div className="container">
				<div className="section-head section-head--center">
					<p className="eyebrow reveal is-visible">{subTitle}</p>
					<h2
						className="section-title reveal is-visible"
						style={{ '--reveal-delay': '60ms' } as CSSProperties}
					>
						{title}
					</h2>
					<p
						className="section-sub reveal is-visible"
						style={{ '--reveal-delay': '120ms' } as CSSProperties}
					>
						{description}
					</p>
				</div>

				{servicesCards && (
					<div className="grid grid--4 grid--gap">
						{servicesCards.map((card, i) => {
							return (
								<article key={i} className="service-card reveal is-visible">
									{card.image && (
										<span className="service-card__icon">
											<Image
												src={imageObj(card.image).url}
												alt={imageObj(card.image).alt}
												width="48"
												height="48"
											/>
										</span>
									)}
									<h3 className="service-card__title">{card.title}</h3>
									<p className="service-card__text">{card.text}</p>
								</article>
							)
						})}
					</div>
				)}
			</div>
		</section>
	)
}
