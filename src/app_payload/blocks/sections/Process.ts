import { CardFields } from '@/app_payload/fields/CardFields'
import type { Block } from 'payload'

export const Process: Block = {
	slug: 'process',
	labels: {
		singular: 'Process',
		plural: 'Process',
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
			type: 'array',
			name: 'processCards',
			fields: CardFields,
		},
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
