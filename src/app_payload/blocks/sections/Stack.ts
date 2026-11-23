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
		},
		{
			name: 'title',
			type: 'text',
			required: true,
		},

		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
