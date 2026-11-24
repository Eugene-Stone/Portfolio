import type { Block } from 'payload'

export const Stack: Block = {
	slug: 'stack',
	labels: {
		singular: 'Stack',
		plural: 'Stack',
	},
	fields: [
		{
			name: 'subTitle',
			type: 'text',
			localized: true,
		},
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
		},

		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
