import { GlobalConfig } from 'payload'

import { slugField } from '@/app_payload/fields/slugField'
// import { generateSlug } from '@/app_payload/utils/slugify/generateSlug'
import { publishedAtGlobal } from '@/app_payload/utils/publishedAt'
import { generateSlugGlobal } from '../utils/slugify/generateSlug'
import { Sections } from '../blocks/Sections'

const collectionName = 'home'
const slugSourceField = 'title'

export const HomePage: GlobalConfig = {
	slug: 'homePage', // required
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
			name: '__component',
			type: 'text',
			defaultValue: 'home',
			admin: {
				hidden: true,
			},
		},

		// Sidebar
		{
			type: 'group',
			admin: {
				position: 'sidebar',
			},
			fields: [
				slugField(slugSourceField, collectionName),
				{
					name: 'publishedAt',
					type: 'date',
				},
				{
					name: 'infoBlock',
					type: 'ui',
					admin: {
						width: '50%',
						components: {
							Field: '/app_payload/components/CustomInfoField', // Путь к компоненту
						},
					},
				},
				{
					name: 'space',
					type: 'ui',
					admin: {
						width: '20%',
						components: {
							Field: '/app_payload/components/SpaceField',
						},
					},
				},
			],
		},

		// Fields
		{
			type: 'text',
			name: 'title',
		},
		{
			name: 'sections',
			type: 'blocks',
			blocks: Sections,
		},
	],

	hooks: {
		beforeValidate: [generateSlugGlobal(slugSourceField, collectionName)],
		beforeChange: [publishedAtGlobal],
	},
}
