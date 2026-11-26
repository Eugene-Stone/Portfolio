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
			localized: true,
		},
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
		},
		{
			name: 'allCasesUrl',
			type: 'text',
			localized: true,
			required: true,
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
