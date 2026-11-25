import type { Field } from 'payload'

export const SpaceField = (width: string, height: string): Field => {
	return {
		name: 'space',
		type: 'ui',
		custom: {
			width: width,
			height: height,
		},
		admin: {
			width: width,
			components: {
				Field: '/app_payload/components/SpaceFieldComponent', // Путь к компоненту
			},
		},
	}
}
