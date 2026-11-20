import { type CollectionConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '../utils/slugify/generateSlug'

import { htmlEditorField } from 'payload-html-editor'
import { publishedAtCollection } from '../utils/publishedAt'

const slugSourceField = 'title'
const collectionName = 'cases'

export const Cases: CollectionConfig = {
	slug: 'cases',
	labels: {
		singular: 'Case',
		plural: 'Cases',
	},

	// Групировка в админке
	admin: {
		useAsTitle: 'title',
		group: 'Progects',
		description: '',
	},
	// defaultPopulate определяет, какие поля выбирать, когда документ этой коллекции попадает в результат как связанный документ (relationship/upload population)
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
			type: 'row',
			fields: [
				{
					name: 'title',
					type: 'text',
					admin: {
						width: '50%',
					},
				},
				{
					name: 'typeProject',
					type: 'relationship',
					relationTo: ['casesCategory'],
					admin: {
						width: '50%',
					},
				},
			],
		},
		{
			type: 'row',
			fields: [
				{
					name: 'description',
					type: 'textarea',
					admin: {
						width: '50%',
					},
				},
				{
					name: 'tags',
					type: 'relationship',
					relationTo: ['tagsFrontend', 'tagsBackend'],
					hasMany: true,
					admin: {
						width: '50%',
					},
				},
			],
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
		htmlEditorField({
			name: 'textHtml',
			label: 'Text Html',
			features: {
				// images: false,
				tables: false,
				// sourceEditing: false,
				// textAlignment: true,
			},
		}),
	],

	hooks: {
		beforeValidate: [generateSlug(slugSourceField, collectionName)],
		beforeChange: [publishedAtCollection],
	},
}
