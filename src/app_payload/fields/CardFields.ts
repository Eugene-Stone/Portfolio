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
		required: true,
		localized: true,
	},
	{
		name: 'text', // required
		type: 'textarea', // required
		localized: true,
	},
]
