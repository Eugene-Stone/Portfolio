import type { CollectionBeforeChangeHook } from 'payload'
import type { GlobalBeforeChangeHook } from 'payload'

export const publishedAtCollection: CollectionBeforeChangeHook = ({ data, operation, req }) => {
	if (operation === 'create' || operation === 'update') {
		if (req.data && !req.data.publishedAt) {
			const now = new Date()
			return {
				...data,
				publishedAt: now,
			}
		}
	}

	return data
}

export const publishedAtGlobal: GlobalBeforeChangeHook = ({ data, originalDoc }) => {
	if (!data?.publishedAt && !originalDoc?.publishedAt) {
		return {
			...data,
			publishedAt: new Date(),
		}
	}

	return data
}
