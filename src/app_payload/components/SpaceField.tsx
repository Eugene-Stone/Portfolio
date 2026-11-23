import type { UIFieldClientProps } from 'payload'

export default function SpaceField({ field }: UIFieldClientProps) {
	const width = field.admin?.width

	console.log('SpaceField', field)

	return (
		<div
			className="field-type"
			style={width ? ({ '--field-width': width } as React.CSSProperties) : undefined}
		>
			&nbsp;
		</div>
	)
}
