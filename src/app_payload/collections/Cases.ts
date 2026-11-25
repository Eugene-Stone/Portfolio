import { type CollectionConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '../utils/slugify/generateSlug'

import { htmlEditorField } from 'payload-html-editor'
import { publishedAtCollection } from '../utils/publishedAt'
import { InfoField } from '../fields/InfoField'

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
				InfoField('Поле slug повинно бути однаковим для всіх локалей.'),
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
					localized: true,
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
					localized: true,
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
			// localized: true,
			features: {
				// images: false,
				tables: false,
				// sourceEditing: false,
				// textAlignment: true,
			},
		}),
	],

	hooks: {
		// // Стандартное поведение
		// beforeValidate: [generateSlug(slugSourceField, collectionName)],

		// Срабатывание только при основной локали
		beforeValidate: [
			async (args) => {
				const localization = args.req.payload.config.localization
				const defaultLocale =
					localization && typeof localization === 'object' && 'defaultLocale' in localization
						? (localization as { defaultLocale?: string }).defaultLocale
						: 'uk'

				const currentLocale = args.req.locale || defaultLocale

				// Генерируем slug только для основной локали
				if (currentLocale && defaultLocale && currentLocale !== defaultLocale) {
					return args.data
				}

				return generateSlug(slugSourceField, collectionName)(args)
			},
		],
		beforeChange: [publishedAtCollection],
	},
}
