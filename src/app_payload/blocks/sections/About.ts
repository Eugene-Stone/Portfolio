import { ButtonFields } from '@/app_payload/fields/ButtonFields'
import type { Block } from 'payload'

export const About: Block = {
	slug: 'about',
	labels: {
		singular: 'About',
		plural: 'About',
	},
	fields: [
		{
			name: 'aboutBadge',
			type: 'group',
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
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},

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
			name: 'paragraph',
			type: 'textarea',
			localized: true,
		},
		{
			name: 'list',
			type: 'array',
			labels: {
				singular: 'List Item',
				plural: 'List Items',
			},
			fields: [
				{
					name: 'text',
					type: 'text',
					localized: true,
					required: true,
				},
			],
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
