import type { Block } from 'payload'
import { htmlEditorField } from 'payload-html-editor'

export const Contacts: Block = {
	slug: 'contacts',
	labels: {
		singular: 'Contacts',
		plural: 'Contacts',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		// {
		// 	name: 'description',
		// 	type: 'textarea',
		// },
		htmlEditorField({
			name: 'description',
			label: 'Description',
			features: {
				// images: false,
				tables: false,
				// sourceEditing: false,
				// textAlignment: true,
			},
		}),
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
