'use client'

import React from 'react'

export const FrontendLink: React.FC = () => {
	const href = '/'

	return (
		<a className="nav__link frontend-link" href={href} target="_blank">
			<span className="frontend-link__label">
				<img className="frontend-link__image" src="/images/favicon.png" alt="Favicon" />
				<span className="frontend-link__title">Site link</span>
			</span>
		</a>
	)
}
