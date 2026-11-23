import type { UIFieldClientProps } from 'payload'

type FieldWithCustom = {
	custom?: {
		description?: unknown
	}
}

export default function InfoFieldComponent({ field }: UIFieldClientProps) {
	const custom = (field as unknown as FieldWithCustom).custom
	const description = typeof custom?.description === 'string' ? custom.description : null

	if (!description) return null

	return (
		<div className="field-type" style={{ transform: 'translateY(-15px)' }}>
			{description}
		</div>
	)
}
