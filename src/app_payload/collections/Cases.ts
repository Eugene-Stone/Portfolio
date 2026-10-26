// import { slugField, type CollectionConfig } from 'payload'
import { type CollectionConfig } from 'payload'

import { htmlEditorField } from 'payload-html-editor'
import { slugField } from '@/app_payload/fields/slugField'
import { generateSlug } from '../utils/generateSlug'

const slugSourceField = 'title'
const collectionName = 'cases'

export const Cases: CollectionConfig = {
	slug: 'cases',
	labels: {
		singular: 'Case',
		plural: 'Cases',
	},
	admin: {
		useAsTitle: 'title',
		group: 'Progects',
		description: '',
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
	hooks: {
		beforeValidate: [generateSlug(slugSourceField, collectionName)],
	},
	fields: [
		// slugField(),
		// slugField(slugSourceField),
		slugField(slugSourceField, collectionName),

		{
			name: 'title',
			type: 'text',
		},
		{
			name: 'description',
			type: 'textarea',
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'text',
			type: 'richText',
		},
		htmlEditorField({
			name: 'textHtml',
			label: 'Text Html',
		}),
		{
			name: 'price',
			type: 'number',
		},
		{
			name: 'duration',
			type: 'text',
		},

		{
			name: '_collection',
			type: 'text',
			defaultValue: 'case',
			admin: {
				hidden: true,
			},
		},
	],
}
