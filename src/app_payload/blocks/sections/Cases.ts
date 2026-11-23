import type { Block } from 'payload'

export const Cases: Block = {
	slug: 'cases',
	labels: {
		singular: 'Cases',
		plural: 'Case',
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
			name: 'allCasesUrl',
			type: 'text',
		},
		{
			name: 'bestCases',
			type: 'relationship',
			hasMany: true,
			relationTo: ['cases'],
		},
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
