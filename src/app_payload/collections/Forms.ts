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
	},

	fields: [
		{
			name: 'title',
			type: 'text',
			localized: true,
		},
		{
			name: 'submitUrl',
			type: 'text',
		},
		{
			name: 'successMessage',
			type: 'text',
			localized: true,
		},
		{
			name: 'errorMessage',
			type: 'text',
			localized: true,
		},
		{
			name: 'fields',
			type: 'blocks',
			blocks: formBlocks,
		},
	],
}
