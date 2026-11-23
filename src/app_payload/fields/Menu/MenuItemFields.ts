import type { Field } from 'payload'

export const MenuItemFields = (menuLevel: string): Field[] => {
	return [
		{
			name: 'level',
			type: 'text',
			defaultValue: menuLevel,
			admin: {
				hidden: true,
			},
		},

		{
			type: 'row',
			fields: [
				{
					name: 'title',
					type: 'text',
					validate: (value: any, { siblingData }: { siblingData: any }) => {
						if (!siblingData?.relationLink && !value) {
							return 'Поле обязательно, если не выбрана связь'
						}
						return true
					},
					admin: {
						width: '50%',
						description: 'Если выбрана связь поле необязательное',
					},
				},
				{
					name: 'isExternal',
					type: 'checkbox',
					admin: {
						width: '50%',
						// Сдвигаем чекбокс чуть ниже, чтобы он визуально выровнялся с инпутом (без учета текста ошибки/описания)
						style: {
							marginTop: '34px',
						},
					},
				},
			],
		},
		{
			type: 'row',
			fields: [
				{
					name: 'relationLink',
					type: 'relationship',
					relationTo: ['cases', 'users'],
					admin: {
						width: '50%',
					},
				},
				{
					name: 'url',
					type: 'text',
					admin: {
						width: '50%',
						condition: (data, siblingData) => !Boolean(siblingData?.relationLink),
					},
				},
			],
		},
	]
}
