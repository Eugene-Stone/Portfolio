import { ButtonFields } from '@/app_payload/fields/ButtonFields'
import type { Block } from 'payload'

export const Marquee: Block = {
	slug: 'marquee',
	labels: {
		singular: 'Marquee',
		plural: 'Marquee',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			defaultValue: 'Marquee',
		},
	],
}
