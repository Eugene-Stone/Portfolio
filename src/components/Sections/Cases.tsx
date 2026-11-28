import { PropsSection } from '@/TYPES'
import { formatHighlightedText } from '@/utils/formatHighlightedText'
import { imageObj } from '@/utils/imageNormalize'
import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Case, CasesCategory } from '@/payload-types'
import { getRelationItem, getRelationItems } from '@/utils/getRelation'

export default async function Cases({ locale, dict, data }: PropsSection<'cases'>) {
	const { subTitle, title, allCasesUrl, id_anchor, bestCases } = data

	const casesList = getRelationItems<Case>(bestCases)

	return (
		<section className="section section--soft" id={id_anchor || undefined}>
			<div className="container">
				<div className="section-head section-head--split">
					<div>
						<p className="eyebrow reveal is-visible">{subTitle}</p>
						<h2
							className="section-title reveal is-visible"
							style={{ '--reveal-delay': '60ms' } as CSSProperties}
						>
							{title}
						</h2>
					</div>
					<a
						className="btn btn--ghost reveal is-visible"
						style={{ '--reveal-delay': '120ms' } as CSSProperties}
						href={`/${locale}/cases`}
					>
						{allCasesUrl} →
					</a>
				</div>

				{casesList && (
					<div className="grid grid--3 grid--gap">
						{casesList.map((caseItem, i) => {
							const type = getRelationItem(caseItem.typeProject)
							const tags = getRelationItems(caseItem.tags)

							return (
								<article key={i} className="project-card reveal is-visible">
									<a className="project-card__media" href={`/${locale}/cases/${caseItem.slug}`}>
										<Image
											src={imageObj(caseItem.image).url}
											alt={imageObj(caseItem.image).alt}
											width={720}
											height={520}
										/>
										<span className="project-card__badge">{type && type.title}</span>
									</a>
									<div className="project-card__body">
										<h3 className="project-card__title">
											<a href="project.html">{caseItem.title}</a>
										</h3>
										<p className="project-card__text">{caseItem.description}</p>
										{tags && (
											<ul className="tag-list">
												{tags.map((tag, i) => {
													return (
														<li key={i} className="tag">
															{tag.title}
														</li>
													)
												})}
											</ul>
										)}
									</div>
								</article>
							)
						})}
					</div>
				)}
			</div>
		</section>
	)
}
