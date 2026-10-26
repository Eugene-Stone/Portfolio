'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

// Ссылка добавляется внизу стандартной навигации Payload.
export const ApiLink: React.FC = () => {
	const pathname = usePathname()
	const href = '/api/docs'
	const isActive = pathname === href

	return (
		<div className="nav-group__content">
			<a className="nav__link" href={href} target="_blank">
				{isActive && <span className="nav__link-indicator"></span>}
				<span className="nav__link-label">Apis Docs</span>
			</a>
		</div>
	)
}
