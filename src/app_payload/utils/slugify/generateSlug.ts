import type { CollectionSlug } from 'payload'
import type { CollectionBeforeValidateHook } from 'payload'
import type { GlobalBeforeValidateHook } from 'payload'

import { transliterateSlug } from '@/app_payload/utils/slugify/transliterateSlug'

// Для коллекций
export const generateSlug = (
	fieldToUse: string,
	// collectionName: CollectionSlug, // Работает при подключенной колекции в payload.config.ts
	collectionName: string,
): CollectionBeforeValidateHook => {
	return async ({ data, req, operation, originalDoc }) => {
		if (!data) return data

		// Если slug уже существует, сохраняем его
		if (operation === 'update' && originalDoc?.slug) {
			return data
		}

		const sourceValue = data[fieldToUse] ?? originalDoc?.[fieldToUse]

		if (!sourceValue) return data

		const baseSlug = transliterateSlug(String(sourceValue))

		// // При обновлении сохраняем slug, если исходное поле не менялось
		// if (operation === 'update' && data[fieldToUse] === undefined && data.slug === undefined) {
		// 	return data
		// }

		let slug = baseSlug
		let counter = 1

		while (true) {
			const existing = await req.payload.find({
				// collection: collectionName,
				collection: collectionName as CollectionSlug,
				where: {
					and: [
						{ slug: { equals: slug } },
						...(originalDoc?.id ? [{ id: { not_equals: originalDoc.id } }] : []),
					],
				},
				limit: 1,
				depth: 0,
				overrideAccess: true,
			})

			if (existing.docs.length === 0) {
				break
			}

			slug = `${baseSlug}-${counter}`
			counter++
		}

		data.slug = slug

		return data
	}
}

// Для Global
export const generateSlugGlobal = (
	fieldToUse: string,
	collectionName?: string,
): GlobalBeforeValidateHook => {
	return ({ data, originalDoc }) => {
		if (!data) return data

		const sourceValue = data[fieldToUse] ?? originalDoc?.[fieldToUse]

		if (!sourceValue) return data

		return {
			...data,
			slug: transliterateSlug(String(sourceValue)),
		}
	}
}
