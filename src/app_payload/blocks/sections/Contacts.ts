import type { Block } from 'payload'

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
			localized: true,
		},
		{
			name: 'description',
			type: 'textarea',
			localized: true,
		},
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
