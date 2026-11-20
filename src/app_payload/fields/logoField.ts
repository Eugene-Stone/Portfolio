import type { Field } from 'payload'

export const LogoField: Field = {
	name: 'logo',
	type: 'upload',
	relationTo: 'media',
}
