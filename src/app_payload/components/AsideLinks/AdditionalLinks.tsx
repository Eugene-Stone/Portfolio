'use client'

import { ApiLink } from './ApiLink'
import { FrontendLink } from './FrontendLink'

export function AdditionalLinks() {
	return (
		<div className="nav-group__content">
			<FrontendLink />
			<ApiLink />
		</div>
	)
}
