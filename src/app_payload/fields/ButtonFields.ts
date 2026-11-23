import { Field } from 'payload'

export const ButtonFields: Field[] = [
	{
		name: 'type',
		type: 'select',
		defaultValue: 'Primary',
		options: [
			{ label: 'Primary', value: 'Primary' },
			{ label: 'Secondary', value: 'Secondary' },
		],
	},
	{
		type: 'row',
		fields: [
			{
				name: 'text',
				type: 'text',
			},
			{
				name: 'url',
				type: 'text',
			},
		],
	},
	{
		name: 'isExternal',
		type: 'checkbox',
	},
]
