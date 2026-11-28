import { PropsSection } from '@/TYPES'
import { formatHighlightedText } from '@/utils/formatHighlightedText'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export default async function Hero({ locale, dict, data }: PropsSection<'hero'>) {
	const { subTitle, title, description, buttons, stats, id_anchor } = data
	return (
		<section className="hero" id={id_anchor || undefined}>
			<div className="hero__bg" aria-hidden="true">
				<span className="blob blob--1" />
				<span className="blob blob--2" />
				<span className="hero__grid" />
			</div>
			<div className="container hero__inner">
				<div className="hero__content">
					<p className="eyebrow reveal is-visible">
						<span className="eyebrow__dot" /> {subTitle}
					</p>
					<h1
						className="hero__title reveal is-visible"
						style={{ '--reveal-delay': '80ms' } as CSSProperties}
					>
						{formatHighlightedText(title)}
					</h1>
					<p
						className="hero__lead reveal is-visible"
						style={{ '--reveal-delay': '160ms' } as CSSProperties}
					>
						{description}
					</p>

					{buttons && (
						<div
							className="hero__actions reveal is-visible"
							style={{ '--reveal-delay': '240ms' } as CSSProperties}
						>
							{buttons?.map((button, i) => {
								const target = button.isExternal ? '_blank' : '_self'
								const btnClass =
									button.type === 'Primary'
										? 'btn--primary'
										: button.type === 'Secondary'
											? 'btn--ghost'
											: ''
								return (
									<Link
										key={i}
										className={`btn ${btnClass} btn--lg`}
										href={`/${locale}${button.url}`}
										target={target}
									>
										{button.text}
									</Link>
								)
							})}
						</div>
					)}

					{stats && (
						<ul
							className="hero__stats reveal is-visible"
							style={{ '--reveal-delay': '320ms' } as CSSProperties}
						>
							{stats?.map((stat, i) => {
								return (
									<li key={i}>
										<strong data-counter={stat.number} data-suffix="+">
											{stat.number}
										</strong>
										<span>{stat.text}</span>
									</li>
								)
							})}
						</ul>
					)}
				</div>
				<div
					className="hero__visual reveal is-visible"
					style={{ '--reveal-delay': '200ms' } as CSSProperties}
				>
					<div className="profile-card">
						<div className="profile-card__glow" aria-hidden="true" />
						<div className="profile-card__head">
							<img
								className="profile-card__avatar"
								src="https://placehold.co/160x160/5457f0/ffffff?text=ES"
								alt="Фото профілю"
								width={80}
								height={80}
							/>
							<div>
								<p className="profile-card__name">{dict.firstName}</p>
								<p className="profile-card__role">Fullstack Developer</p>
							</div>
							<span className="status-dot" title="Онлайн" />
						</div>
						<div className="profile-card__body">
							<div className="code-line">
								<span className="c-key">stack</span>: [<span className="c-str">'Next.js'</span>,
								<span className="c-str">'Strapi'</span>, <span className="c-str">'TS'</span>]
							</div>
							<div className="code-line">
								<span className="c-key">db</span>: <span className="c-str">'PostgreSQL'</span>
							</div>
							<div className="code-line">
								<span className="c-key">status</span>: <span className="c-bool">true</span>
							</div>
						</div>
						<div className="profile-card__tags">
							<span className="tag">Next.js 16</span>
							<span className="tag">React 19</span>
							<span className="tag">TypeScript</span>
							<span className="tag">Strapi 5</span>
						</div>
					</div>
					<span className="float-chip float-chip--1">Next.js</span>
					<span className="float-chip float-chip--2">App Router</span>
					<span className="float-chip float-chip--3">Payload CMS</span>
				</div>
			</div>
		</section>
	)
}
