export type RelationItem = {
	id: number | string
	slug?: string
	title?: string
}

// Для одного поля типа typeProject: { relationTo, value: { id, slug, title } | number }
export function getRelationItem(
	relation: { value?: number | string | RelationItem | null } | null | undefined,
): RelationItem | null {
	const val = relation?.value
	return typeof val === 'object' && val !== null ? val : null
}

// Для массива связей типа tags: [{ relationTo, value: { id, slug, title } | number }]
export function getRelationItems(
	items: readonly { value?: number | string | RelationItem | null }[] | null | undefined,
): RelationItem[] {
	if (!items) return []

	return items
		.map((item) => item?.value)
		.filter((val): val is RelationItem => typeof val === 'object' && val !== null)
}
