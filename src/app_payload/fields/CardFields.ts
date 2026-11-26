import { Field } from 'payload'

export const CardFields: Field[] = [
	{
		name: 'image',
		type: 'upload',
		relationTo: 'media',
	},
	{
		name: 'title', // required
		type: 'text', // required
		localized: true,
		required: true,
	},
	{
		name: 'text', // required
		type: 'textarea', // required
		localized: true,
		required: true,
	},
]
