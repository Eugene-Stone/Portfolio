import type { CollectionConfig } from 'payload'

import { formBlocks } from '@/app_payload/blocks/FormFields'

export const Forms: CollectionConfig = {
	slug: 'forms',
	admin: {
		useAsTitle: 'title',
		group: 'Forms',
	},
	access: {
		read: () => true,
		// create: () => true,
		// update: () => true,
		// delete: () => true,
		// delete: hasRole(['superAdmin', 'admin', 'editor']),
	},

	versions: {
		drafts: true,
		maxPerDoc: 3,
	},

	fields: [
		{
			name: 'title',
			type: 'text',
			localized: true,
			required: true,
		},
		{
			name: 'submitUrl',
			type: 'text',
			required: true,
		},
		{
			name: 'successMessage',
			type: 'text',
			localized: true,
			required: true,
		},
		{
			name: 'errorMessage',
			type: 'text',
			localized: true,
			required: true,
		},
		{
			name: 'fields',
			type: 'blocks',
			blocks: formBlocks,
		},
	],
}
