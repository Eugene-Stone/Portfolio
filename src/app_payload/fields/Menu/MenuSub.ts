import type { Field } from 'payload'
import { MenuItemFields } from './MenuItemFields'

export const MenuSub: Field = {
	name: 'subMenu',
	type: 'array',
	labels: {
		singular: 'Sub Menu Link',
		plural: 'Sub Menu Links',
	},
	admin: {
		condition: (data, siblingData) => Boolean(siblingData?.hasChildren),
	},
	fields: [...MenuItemFields('level-1')],
}
