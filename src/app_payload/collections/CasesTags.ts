import { CollectionConfig } from 'payload'

const CasesTags: CollectionConfig = {
	slug: 'casestags',

	fields: [
		{
			name: 'fieldName',
			label: 'fieldLabel',
			type: 'text',
		},
	],
	admin: {
		useAsTitle: 'fieldName',
		group: 'Progects',
		description: '',
	},
	timestamps: true,
}

export default CasesTags
