'use client'

import React from 'react'

export const FrontendLink: React.FC = () => {
	const href = '/'

	return (
		<a className="nav__link frontend-link" href={href} target="_blank">
			<span className="nav__link-label">
				<h3>Site link</h3>
			</span>
		</a>
	)
}
