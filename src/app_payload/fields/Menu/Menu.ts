import type { Field } from 'payload'
import { MenuItemFields } from './MenuItemFields'
import { MenuSub } from './MenuSub'

export const Menu: Field = {
	name: 'NavigationGeneral',
	type: 'array',
	labels: {
		singular: 'Menu Link',
		plural: 'Menu Links',
	},

	fields: [
		...MenuItemFields('level-0'),

		{
			name: 'hasChildren',
			type: 'checkbox',
			defaultValue: false,
		},

		MenuSub,
	],
}
