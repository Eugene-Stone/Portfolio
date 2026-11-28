import { PropsSection } from '@/TYPES'

export default function Contacts({ data }: PropsSection<'contacts'>) {
	return (
		<section className="contacts" style={{ paddingTop: 0 }}>
			<div className="container">
				<div className="page-hero">
					<h1 className="page-hero__title reveal is-visible">Контакти</h1>
					<p
						className="page-hero__text reveal is-visible"
						style={{ '--revealDelay': '80ms' } as React.CSSProperties}
					>
						Розкажіть про проєкт — відповім протягом дня.
					</p>
				</div>

				<div className="contacts-grid">
					<div>
						<div className="contact-card reveal is-visible">
							<h3>Зв'язатися напряму</h3>
							<ul className="contact-list">
								<li>
									Telegram:{' '}
									<a href="https://t.me/LINK_TELEGRAM" target="_blank" rel="noopener">
										@LINK_TELEGRAM
									</a>
								</li>
								<li>
									GitHub:{' '}
									<a href="http://github.com/Eugene-Stone" target="_blank" rel="noopener">
										Eugene-Stone
									</a>
								</li>
								<li>
									LinkedIn:{' '}
									<a
										href="https://www.linkedin.com/in/LINKEDIN_LINK/"
										target="_blank"
										rel="noopener"
									>
										LINKEDIN_LINK
									</a>
								</li>
							</ul>
						</div>
						<div
							className="contact-card reveal is-visible"
							style={{ '--revealDelay': '100ms' } as React.CSSProperties}
						>
							<h3>Розташування</h3>
							<p>Україна · Працюю віддалено</p>
						</div>
					</div>
					<div
						className="contact-card reveal is-visible"
						style={{ '--revealDelay': '160ms' } as React.CSSProperties}
					>
						<h3>Залишити заявку</h3>
						<form className="form" data-contact-form>
							<div className="form__row">
								<div>
									<label htmlFor="name">Ім'я</label>
									<input id="name" name="name" type="text" placeholder="Ваше ім'я" required />
								</div>
								<div>
									<label htmlFor="email">Email</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="you@example.com"
										required
									/>
								</div>
							</div>
							<div>
								<label htmlFor="message">Повідомлення</label>
								<textarea
									id="message"
									name="message"
									placeholder="Опишіть задачу"
									required
									defaultValue={''}
								/>
							</div>
							<button className="btn btn--primary btn--lg" type="submit">
								Надіслати
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
