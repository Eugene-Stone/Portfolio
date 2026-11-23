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
							required: false,
							admin: {
								width: '25%',
							},
						},
						{
							name: 'text',
							type: 'text',
							required: false,
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
		},

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
			name: 'paragraph',
			type: 'textarea',
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
