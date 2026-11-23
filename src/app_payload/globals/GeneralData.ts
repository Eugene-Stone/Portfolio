import { GlobalConfig } from 'payload'
import { LogoField } from '../fields/LogoField'
import { Menu } from '../fields/Menu/Menu'
import { ButtonFields } from '../fields/ButtonFields'

export const GeneralData: GlobalConfig = {
	slug: 'generalData', // required
	admin: {
		group: 'General', // либо другая кастомная группа
	},
	access: {
		read: () => true,
		// create: () => true,
		// update: () => true,
		// delete: () => true,
		// delete: hasRole(['superAdmin', 'admin', 'editor']),
	},
	versions: {
		drafts: true,
	},

	fields: [
		{
			name: 'header',
			type: 'group',
			// label: 'Группа настроек хедера',
			fields: [
				LogoField,
				{
					name: 'buttonsInHeader',
					// label: '',
					type: 'array',
					labels: {
						singular: 'Button',
						plural: 'Buttons',
					},
					fields: ButtonFields,
				},
			],
		},

		// {
		// 	name: 'navigation',
		// 	type: 'blocks',
		// 	blocks: [
		// 		{
		// 			slug: 'link',
		// 			fields: [
		// 				{
		// 					name: 'title',
		// 					type: 'text',
		// 					// required: true,
		// 					validate: (value: any, { siblingData }: { siblingData: any }) => {
		// 						// Если связь НЕ выбрана, а значение title пустое — возвращаем ошибку
		// 						if (!siblingData?.relationLink && !value) {
		// 							return 'Поле обязательно, если не выбрана связь'
		// 						}
		// 						return true // Валидация прошла успешно
		// 					},
		// 					admin: {
		// 						description: 'Если выбрана связь поле необязательное',
		// 						// // siblingData смотрит на поля внутри текущего блока
		// 						// condition: (data, siblingData) => !Boolean(siblingData?.relationLink),
		// 					},
		// 				},

		// 				{
		// 					type: 'row',
		// 					fields: [
		// 						{
		// 							name: 'relationLink',
		// 							type: 'relationship',
		// 							// relationTo: 'cases',
		// 							relationTo: ['cases', 'users'], // Ссылаемся на разные сущности
		// 							admin: {
		// 								width: '50%',
		// 							},
		// 						},
		// 						{
		// 							name: 'url',
		// 							type: 'text',
		// 							admin: {
		// 								width: '50%',
		// 								// siblingData смотрит на поля внутри текущего блока
		// 								condition: (data, siblingData) => !Boolean(siblingData?.relationLink),
		// 							},
		// 						},
		// 					],
		// 				},
		// 				{
		// 					name: 'isExternal',
		// 					type: 'checkbox',
		// 				},
		// 			],
		// 		},
		// 	],
		// },

		Menu,

		{
			name: 'footer',
			type: 'group',
			fields: [
				LogoField,
				{
					name: 'description',
					type: 'textarea',
				},
				{
					type: 'row',
					fields: [
						{
							name: 'copyrightLeft',
							type: 'textarea',
						},
						{
							name: 'copyrightRight',
							type: 'textarea',
						},
					],
				},
			],
		},

		{
			name: 'contactsList',
			type: 'array',
			labels: {
				singular: 'Contact',
				plural: 'Contacts',
			},
			fields: [
				{
					type: 'row',
					fields: [
						{
							name: 'text',
							type: 'text',
							admin: {
								width: '40%',
							},
						},
						{
							name: 'url',
							type: 'text',
							admin: {
								width: '40%',
								// siblingData смотрит на поля внутри текущего блока
								// condition: (data, siblingData) => siblingData?.isLink !== false,
							},
						},
						{
							name: 'isExternal',
							type: 'checkbox',
							admin: {
								width: '20%',
								style: {
									marginTop: 35,
								},
								// siblingData смотрит на поля внутри текущего блока
								// condition: (data, siblingData) => siblingData?.isLink !== false,
							},
						},
					],
				},
			],
		},

		{
			name: 'ContactsGroupName',
			type: 'group',
			fields: [
				{
					type: 'array',
					name: 'Contacts',
					labels: {
						singular: 'Contact',
						plural: 'Contacts',
					},
					fields: [
						{
							type: 'row',
							fields: [
								{
									name: 'text',
									type: 'text',
									admin: {
										width: '40%',
									},
								},
								{
									name: 'url',
									type: 'text',
									admin: {
										width: '40%',
										// siblingData смотрит на поля внутри текущего блока
										// condition: (data, siblingData) => siblingData?.isLink !== false,
									},
								},
								{
									name: 'isExternal',
									type: 'checkbox',
									admin: {
										width: '20%',
										style: {
											marginTop: 35,
										},
										// siblingData смотрит на поля внутри текущего блока
										// condition: (data, siblingData) => siblingData?.isLink !== false,
									},
								},
							],
						},
					],
				},
			],
		},
	],
}
