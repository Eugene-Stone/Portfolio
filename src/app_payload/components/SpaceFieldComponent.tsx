import type { UIFieldClientProps } from 'payload'

type FieldWithCustom = {
	custom?: {
		width?: unknown
		height?: unknown
	}
}

export default function SpaceFieldComponent({ field }: UIFieldClientProps) {
	const custom = (field as unknown as FieldWithCustom).custom

	const width = typeof custom?.width === 'string' ? custom.width : null
	const height = typeof custom?.height === 'string' ? custom.height : null

	if (!width && !height) return null

	// const width = field.admin?.width

	console.log('SpaceField', field)
	console.log('SpaceField width', width)
	console.log('SpaceField height', height)

	return (
		// <div className="field-type" style={width ? ({ '--field-width': width } as React.CSSProperties) : undefined} >
		<div
			className="field-type"
			style={
				{
					...(width ? { '--field-width': width } : {}),
					...(height ? { marginTop: height } : {}),
					height: 0,
				} as React.CSSProperties
			}
		>
			&nbsp;
		</div>
	)
}
