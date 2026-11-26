import { createMetadata, getGeneralData, MetaProps } from '@/api/api-server'
import { BACKEND_URL, FRONTEND_URL, SITE_TITLE } from '@/CONSTANTS'
import { Locale } from '@/i18n/config'
import { Media } from '@/payload-types'
import '@/styles/base.css'
import '@/styles/components.css'
import '@/styles/pages.css'
import { Metadata } from 'next'

import Link from 'next/link'
import NextTopLoader from 'nextjs-toploader'

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
	const { locale, slug } = await params
	const { meta } = await getGeneralData(locale)

	const pageTitle = meta?.title || meta?.ogTitle || SITE_TITLE || 'Site'
	const seo = meta || {}

	return createMetadata(pageTitle, seo, locale, slug)
}

export type RootProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}
// export default async function RootLayout({ children }: LayoutProps<'/'>) {
export default async function RootLayout({ children, params }: RootProps) {
	const { locale, slug } = await params

	console.log('locale', locale)
	console.log('slug', slug)

	return (
		<html lang={locale}>
			<body>
				<NextTopLoader
					color="#2563eb"
					initialPosition={0.08}
					crawlSpeed={200}
					height={5}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
					shadow="0 0 10px #2563eb,0 0 5px #2563eb"
					// template='<div class="bar" role="bar"><div class="peg"></div></div>
					// <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
					zIndex={1600}
					showAtBottom={false}
				/>

				<Link className="skip-link" href="#main">
					Перейти до вмісту
				</Link>

				<header className="site-header" data-header>
					<div className="scroll-progress" data-scroll-progress />
					<div className="container header__inner">
						<a className="logo" href="index.html">
							<span className="logo__mark">ES</span>
							<span className="logo__text">
								Eugene<em>Stone</em>
							</span>
						</a>
						<nav className="nav" id="primary-nav" aria-label="Основна навігація" data-nav>
							<ul className="nav__list">
								<li>
									<a className="nav__link is-active" href="index.html">
										Головна
									</a>
								</li>
								<li>
									<a className="nav__link" href="portfolio.html">
										Проєкти
									</a>
								</li>
								<li>
									<a className="nav__link" href="blog.html">
										Блог
									</a>
								</li>
								<li>
									<a className="nav__link" href="contacts.html">
										Контакти
									</a>
								</li>
							</ul>
							<div className="nav__footer">
								<a
									className="nav__footer-link"
									href="https://t.me/LINK_TELEGRAM"
									target="_blank"
									rel="noopener"
								>
									Telegram
								</a>
								<a
									className="nav__footer-link"
									href="http://github.com/Eugene-Stone"
									target="_blank"
									rel="noopener"
								>
									GitHub
								</a>
								<a
									className="nav__footer-link"
									href="https://www.linkedin.com/in/LINKEDIN_LINK/"
									target="_blank"
									rel="noopener"
								>
									LinkedIn
								</a>
							</div>
						</nav>
						<div className="header__actions">
							<a className="btn btn--primary btn--sm header__cta" href="contacts.html">
								Обговорити проєкт
							</a>
							<button
								className="burger"
								type="button"
								aria-label="Відкрити меню"
								aria-expanded="false"
								aria-controls="primary-nav"
								data-burger
							>
								<span />
								<span />
								<span />
							</button>
						</div>
					</div>
				</header>

				<Link href="/contacts">Contacts</Link>
				{children}

				<footer className="site-footer">
					<div className="container">
						<div className="footer__top">
							<div className="footer__brand">
								<a className="logo logo--footer" href="index.html">
									<span className="logo__mark">ES</span>
									<span className="logo__text">
										Eugene<em>Stone</em>
									</span>
								</a>
								<p className="footer__desc">
									Frontend та Fullstack розробник.
									<br />
									Next.js, React, TypeScript, Strapi.
								</p>
							</div>
							<nav className="footer__nav" aria-label="Навігація в нижній частині">
								<h3 className="footer__title">Розділи</h3>
								<ul>
									<li>
										<a href="index.html">Головна</a>
									</li>
									<li>
										<a href="portfolio.html">Проєкти</a>
									</li>
									<li>
										<a href="blog.html">Блог</a>
									</li>
									<li>
										<a href="contacts.html">Контакти</a>
									</li>
								</ul>
							</nav>
							<div className="footer__contacts">
								<h3 className="footer__title">Контакти</h3>
								<ul>
									<li>
										<a href="https://t.me/LINK_TELEGRAM" target="_blank" rel="noopener">
											t.me/LINK_TELEGRAM
										</a>
									</li>
									<li>
										<a href="http://github.com/Eugene-Stone" target="_blank" rel="noopener">
											github.com/Eugene-Stone
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/in/LINKEDIN_LINK/"
											target="_blank"
											rel="noopener"
										>
											linkedin.com/in/LINKEDIN_LINK
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="footer__bottom">
							<p>
								© <span data-year>2025</span> Eugene Stone. Усі права захищено.
							</p>
							<p>Україна · Працюю віддалено</p>
						</div>
					</div>
				</footer>
				<button className="to-top" type="button" aria-label="Догори" data-to-top>
					↑
				</button>
			</body>
		</html>
	)
}
