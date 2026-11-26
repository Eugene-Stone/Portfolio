'use client'
import { GeneralDatum } from '@/payload-types'
import ButtonScrollTop from '../ButtonScrollTop'
import { Dictionary, Locale } from '@/i18n/config'
import { imageObj } from '@/utils/imageNormalize'
import Image from 'next/image'
import { detectActiveLink } from '@/utils/detectActiveLink'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {
	generalData: GeneralDatum
	locale: Locale
	dict: Dictionary
}

export default function Footer({ generalData, locale, dict }: Props) {
	const pathname = usePathname()
	const { navigationGeneral, contactsList, footer } = generalData

	// если footer окажется undefined или null, возьмется пустой объект {}, и ошибки на деструктуризации не будет.
	const { logo, description, copyrightLeft, copyrightRight } = footer ?? {}
	const logoObj = imageObj(logo)

	return (
		<>
			<footer className="site-footer">
				<div className="container">
					<div className="footer__top">
						<div className="footer__brand">
							<a className="logo logo--footer" href={`/${locale}`}>
								<Image src={logoObj.url} alt={logoObj.alt} width={150} height={38} />
							</a>
							{description && <p className="footer__desc">{description}</p>}
						</div>
						<nav className="footer__nav" aria-label="Навігація в нижній частині">
							<h3 className="footer__title">Розділи</h3>
							{navigationGeneral && (
								<ul>
									{navigationGeneral.map((link, i) => {
										const relValue = link.relationLink?.value
										const relSlug =
											typeof relValue === 'object' &&
											relValue !== null &&
											'slug' in relValue &&
											typeof relValue.slug === 'string'
												? relValue.slug
												: ''

										// const url = link.url ? `/${locale}${link.url}` : relValue ? `/${locale}/${relSlug}` : ''
										const url = link.url ? `${link.url}` : relValue ? `/${relSlug}` : ''
										const title = link.title ? link.title : ''
										const isActive = detectActiveLink(pathname, url)

										// console.log('isActive', isActive)
										// console.log('pathname', pathname)
										// console.log('url', url)

										return (
											<li key={i}>
												<Link
													className={`${isActive ? 'is-active' : ''}`}
													// href={url}
													href={`/${locale}${url}`}
												>
													{title}
												</Link>
											</li>
										)
									})}
								</ul>
							)}
						</nav>

						<div className="footer__contacts">
							<h3 className="footer__title">Контакти</h3>

							{contactsList && (
								<ul>
									{contactsList.map((item, i) => {
										const title = item.text ? item.text : ''
										const url = item.url ? item.url : ''

										return (
											<li key={i}>
												<a target="_blank" rel="noopener" href={url}>
													{title}
												</a>
											</li>
										)
									})}
								</ul>
							)}
						</div>
					</div>
					<div className="footer__bottom">
						<p>{copyrightLeft}</p>
						<p>{copyrightRight}</p>
					</div>
				</div>
			</footer>

			<ButtonScrollTop />
		</>
	)
}
