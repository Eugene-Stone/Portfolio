import type { CollectionConfig } from 'payload'

export const FormRequests: CollectionConfig = {
	slug: 'form-requests',
	admin: {
		useAsTitle: 'formTitle',
		group: 'Forms',
	},
	versions: {
		drafts: true,
	},
	fields: [
		{
			name: 'formTitle',
			type: 'text',
			localized: true,
		},
		{
			name: 'formData',
			type: 'textarea',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'formDataJSON',
			type: 'json',
			admin: {
				readOnly: true,
			},
		},
	],
}
