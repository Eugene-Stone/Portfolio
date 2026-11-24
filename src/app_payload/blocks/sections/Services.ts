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
			localized: true,
		},
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
