'use client'

import { Locale } from '@/i18n/config'
import { GeneralDatum } from '@/payload-types'
import { detectActiveLink } from '@/utils/detectActiveLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { Dispatch, SetStateAction } from 'react'
import React from 'react'

type Props = {
	locale: Locale
	openMenu: boolean

	// Либо так (Импортировать Dispatch и SetStateAction)
	// setOpenMenu: Dispatch<SetStateAction<boolean>>;

	// Либо так (Импортировать только React)
	setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>

	navigationGeneral?: GeneralDatum['navigationGeneral']
	contactsList?: GeneralDatum['contactsList']
}

export default function HeaderMenu({
	locale,
	openMenu,
	setOpenMenu,
	navigationGeneral,
	contactsList,
}: Props) {
	const pathname = usePathname()

	return (
		<nav
			className={`nav ${openMenu ? 'is-open' : ''}`}
			id="primary-nav"
			aria-label="Основна навігація"
			data-nav
		>
			{navigationGeneral && (
				<ul className="nav__list">
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
									className={`nav__link ${isActive ? 'is-active' : ''}`}
									// href={url}
									href={`/${locale}${url}`}
									onClick={() => setOpenMenu(false)}
								>
									{title}
								</Link>
							</li>
						)
					})}
				</ul>
			)}

			{contactsList && (
				<div className="nav__footer">
					{contactsList.map((item, i) => {
						const title = item.text ? item.text : ''
						const url = item.url ? item.url : ''

						return (
							<a
								key={i}
								className="nav__footer-link"
								target="_blank"
								rel="noopener"
								href={url}
								onClick={() => setOpenMenu(false)}
							>
								{title}
							</a>
						)
					})}
				</div>
			)}
		</nav>
	)
}
