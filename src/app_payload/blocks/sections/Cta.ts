import { ButtonFields } from '@/app_payload/fields/ButtonFields'
import type { Block } from 'payload'

export const Cta: Block = {
	slug: 'cta',
	labels: {
		singular: 'Cta',
		plural: 'Cta',
	},
	fields: [
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
			name: 'buttons',
			fields: ButtonFields,
		},

		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
