import { type CollectionConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '@/app_payload/utils/slugify/generateSlug'
import { publishedAtCollection } from '@/app_payload/utils/publishedAt'

import { Sections } from '@/app_payload/blocks/Sections'
import { InfoField } from '../fields/InfoField'

const collectionName = 'pages'
const slugSourceField = 'titlePage'

export const Pages: CollectionConfig = {
	slug: 'pages',
	labels: {
		singular: 'Page',
		plural: 'Pages',
	},

	// defaultPopulate определяет, какие поля выбирать, когда документ этой коллекции попадает в результат как связанный документ (relationship/upload population)
	defaultPopulate: {
		titlePage: true,
		slug: true,
	},

	admin: {
		useAsTitle: 'titlePage',
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
				InfoField('Поле slug повинно бути однаковим для всіх локалей.'),
				{
					name: 'publishedAt',
					type: 'date',
				},
			],
		},

		// Fields
		{
			name: 'titlePage',
			type: 'text',
			localized: true,
		},
		{
			name: 'descriptionPage',
			type: 'textarea',
			localized: true,
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
