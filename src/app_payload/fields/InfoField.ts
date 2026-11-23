import type { Field } from 'payload'

export const InfoField = (text: string = 'Текст описания под полем'): Field => {
	return {
		name: 'infoField',
		type: 'ui',
		custom: {
			description: text,
		},
		admin: {
			components: {
				Field: '/app_payload/components/InfoFieldComponent', // Путь к компоненту
			},
		},
	}
}
