'use client'

import { Dictionary, Locale, locales } from '@/i18n/config'
import { GeneralDatum } from '@/payload-types'
import { imageObj } from '@/utils/imageNormalize'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import HeaderMenu from './HeaderMenu'

type Props = {
	generalData: GeneralDatum
	locale: Locale
	dict: Dictionary
}
export default function Header({ generalData, locale, dict }: Props) {
	const { header, navigationGeneral, contactsList } = generalData
	const [openMenu, setOpenMenu] = useState(false)
	const pathname = usePathname()

	// если header окажется undefined или null, возьмется пустой объект {}, и ошибки на деструктуризации не будет.
	const { logo, buttonsInHeader } = header ?? {}
	const logoObj = imageObj(logo)

	function toggleMenu() {
		setOpenMenu((prev) => !prev)
	}

	return (
		<header className="site-header" data-header>
			<div className="scroll-progress" data-scroll-progress />
			<div className="container header__inner">
				<a className="logo" href={`/${locale}`}>
					<Image
						src={logoObj.url}
						alt={logoObj.alt}
						width={150}
						height={38}
						priority
						fetchPriority="high"
					/>
				</a>

				<HeaderMenu
					locale={locale}
					openMenu={openMenu}
					setOpenMenu={setOpenMenu}
					navigationGeneral={navigationGeneral}
					contactsList={contactsList}
				/>

				<div className="header__actions">
					<nav className="header__language" aria-label="Выбор языка">
						{locales.map((language) => {
							const currentLocale = locales.find(
								(candidate) => pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`),
							)
							const restOfPath = currentLocale ? pathname.slice(currentLocale.length + 1) : pathname
							const href = `/${language}${restOfPath}`

							return (
								<Link
									key={language}
									className="header__language-link"
									href={href}
									lang={language}
									aria-current={locale === language ? 'page' : undefined}
								>
									{language.toUpperCase()}
								</Link>
							)
						})}
					</nav>

					{buttonsInHeader?.map((button, i) => {
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
								className={`btn ${btnClass} btn--sm header__cta`}
								href={`/${locale}${button.url}`}
								target={target}
							>
								{button.text}
							</Link>
						)
					})}

					<button
						className={`burger ${openMenu && 'is-active'}`}
						type="button"
						aria-label="Відкрити меню"
						aria-expanded={openMenu}
						aria-controls="primary-nav"
						data-burger
						onClick={toggleMenu}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	)
}
