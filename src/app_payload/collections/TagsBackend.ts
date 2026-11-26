import { type CollectionConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '../utils/slugify/generateSlug'

const slugSourceField = 'title'
const collectionName = 'tagsBackend'

export const TagsBackend: CollectionConfig = {
	slug: 'tagsBackend',
	labels: {
		singular: 'Tag Backend',
		plural: 'Tags Backend',
	},

	admin: {
		useAsTitle: 'title',
		group: 'Progects',
		description: '',
	},

	defaultPopulate: {
		title: true,
		slug: true,
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
		// Sidebar
		{
			type: 'group',
			admin: {
				position: 'sidebar',
			},
			fields: [
				slugField(slugSourceField, collectionName),
				//
			],
		},

		// Fields
		{
			name: 'title',
			type: 'text',
			localized: true,
			required: true,
		},
	],

	hooks: {
		beforeValidate: [generateSlug(slugSourceField, collectionName)],
	},
}
