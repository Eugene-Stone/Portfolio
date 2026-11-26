import ButtonScrollTop from '../ButtonScrollTop'

export default function Footer() {
	return (
		<>
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

			<ButtonScrollTop />
		</>
	)
}
