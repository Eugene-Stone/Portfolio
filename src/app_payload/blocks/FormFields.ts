import type { Block } from 'payload'

const baseField = [
	{
		name: 'label',
		type: 'text' as const,
		localized: true,
		required: true,
	},
	{
		name: 'name',
		type: 'text' as const,
		required: true,
	},
]

export const FormInput: Block = {
	slug: 'formInput',
	labels: {
		singular: 'Form Input',
		plural: 'Form Inputs',
	},
	fields: [
		...baseField,
		{
			name: 'placeholder',
			type: 'text',
			localized: true,
		},
		{
			name: 'type',
			type: 'select',
			options: ['text', 'email'],
			required: true,
			defaultValue: 'text',
		},
		{
			name: 'isRequired',
			type: 'checkbox',
			defaultValue: false,
			required: true,
		},
	],
}

export const FormTextarea: Block = {
	slug: 'formTextarea',
	labels: {
		singular: 'Form Textarea',
		plural: 'Form Textareas',
	},
	fields: [
		...baseField,
		{
			name: 'placeholder',
			type: 'text',
			localized: true,
		},
		{
			name: 'isRequired',
			type: 'checkbox',
			defaultValue: false,
			required: true,
		},
	],
}

export const FormSelect: Block = {
	slug: 'formSelect',
	labels: {
		singular: 'Form Select',
		plural: 'Form Selects',
	},
	fields: [
		...baseField,
		{
			name: 'placeholder',
			type: 'text',
			localized: true,
		},
		{
			name: 'isRequired',
			type: 'checkbox',
			defaultValue: false,
			required: true,
		},
		{
			name: 'options',
			type: 'array',
			fields: [
				{
					name: 'label',
					type: 'text',
					localized: true,
					required: true,
				},
				{
					name: 'value',
					type: 'text',
					required: true,
				},
			],
		},
	],
}

export const FormCheckboxes: Block = {
	slug: 'formCheckboxes',
	labels: {
		singular: 'Form Checkboxes',
		plural: 'Form Checkboxes',
	},
	fields: [
		...baseField,
		{
			name: 'items',
			type: 'array',
			fields: [
				{
					name: 'label',
					type: 'text',
					localized: true,
					required: true,
				},
				{
					name: 'value',
					type: 'text',
					required: true,
				},
				{
					name: 'isChecked',
					type: 'checkbox',
					defaultValue: false,
					required: true,
				},
			],
		},
	],
}

export const FormRadio: Block = {
	slug: 'formRadio',
	labels: {
		singular: 'Form Radio',
		plural: 'Form Radio',
	},
	fields: [
		...baseField,
		{
			name: 'items',
			type: 'array',
			fields: [
				{
					name: 'label',
					type: 'text',
					localized: true,
					required: true,
				},
				{
					name: 'value',
					type: 'text',
					required: true,
				},
				{
					name: 'isChecked',
					type: 'checkbox',
					defaultValue: false,
					required: true,
				},
			],
		},
	],
}

export const FormAgree: Block = {
	slug: 'formAgree',
	labels: {
		singular: 'Form Agree',
		plural: 'Form Agrees',
	},
	fields: baseField,
}

export const FormSubmit: Block = {
	slug: 'formSubmit',
	labels: {
		singular: 'Form Submit',
		plural: 'Form Submits',
	},
	fields: [
		{
			name: 'label',
			type: 'text',
			localized: true,
			required: true,
		},
	],
}

export const formBlocks = [
	FormTextarea,
	FormSubmit,
	FormSelect,
	FormInput,
	FormCheckboxes,
	FormAgree,
]
