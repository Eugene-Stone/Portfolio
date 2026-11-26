import { ButtonFields } from '@/app_payload/fields/ButtonFields'
import type { Block } from 'payload'

export const Hero: Block = {
	slug: 'hero',
	labels: {
		singular: 'Hero',
		plural: 'Hero',
	},
	fields: [
		{
			name: 'subTitle',
			type: 'text',
			localized: true,
			required: true,
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
			required: true,
		},
		{
			type: 'array',
			name: 'buttons',
			fields: ButtonFields,
		},
		{
			type: 'array',
			name: 'stats',
			fields: [
				{
					type: 'row',
					fields: [
						{
							name: 'number',
							type: 'text',
							required: true,
							admin: {
								width: '25%',
							},
						},
						{
							name: 'text',
							type: 'text',
							required: true,
							localized: true,
							admin: {
								width: '75%',
							},
						},
					],
				},
			],
		},
		{
			name: 'id_anchor',
			type: 'text' as const,
		},
	],
}
