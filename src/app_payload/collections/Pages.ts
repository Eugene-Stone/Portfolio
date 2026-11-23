import { type CollectionConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '@/app_payload/utils/slugify/generateSlug'
import { publishedAtCollection } from '@/app_payload/utils/publishedAt'

import { Sections } from '@/app_payload/blocks/Sections'

const collectionName = 'pages'
const slugSourceField = 'title'

export const Pages: CollectionConfig = {
	slug: 'pages',
	labels: {
		singular: 'Page',
		plural: 'Pages',
	},

	// defaultPopulate определяет, какие поля выбирать, когда документ этой коллекции попадает в результат как связанный документ (relationship/upload population)
	defaultPopulate: {
		title: true,
		slug: true,
	},

	admin: {
		useAsTitle: 'title',
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
		// Sidebar
		{
			type: 'group',
			admin: {
				position: 'sidebar',
			},
			fields: [
				slugField(slugSourceField, collectionName),
				{
					name: 'publishedAt',
					type: 'date',
				},
			],
		},

		// Fields
		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'description',
			type: 'textarea',
		},

		{
			name: 'sections',
			type: 'blocks',
			blocks: Sections,
		},
	],

	hooks: {
		beforeValidate: [generateSlug(slugSourceField, collectionName)],
		beforeChange: [publishedAtCollection],
	},
}
