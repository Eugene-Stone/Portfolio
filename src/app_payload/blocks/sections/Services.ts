import { CardFields } from '@/app_payload/fields/CardFields'
import type { Block } from 'payload'

export const Services: Block = {
	slug: 'services',
	labels: {
		singular: 'Services',
		plural: 'Services',
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
			name: 'description',
			type: 'textarea',
		},
		{
			type: 'array',
			name: 'servicesCards',
			fields: CardFields,
		},
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
