import { slugField as payloadSlugField, type Field } from 'payload'
import { transliterateSlug } from '@/app_payload/utils/slugify/transliterateSlug'

export const slugField = (
	slugSourceField: string = 'title',
	collectionName: string = '',
): Field => {
	return payloadSlugField({
		// position: 'sidebar',
		fieldToUse: slugSourceField,
		slugify: ({ valueToSlugify }) => transliterateSlug(String(valueToSlugify ?? '')),
	})
}
