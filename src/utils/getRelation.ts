export type RelationItem = {
	id: number | string
	slug?: string
	title?: string
}

// Для одного поля типа typeProject: { relationTo, value: { id, slug, title } | number }
export function getRelationItem<T extends RelationItem = RelationItem>(
	relation: { value?: number | string | T | null } | null | undefined,
): T | null {
	const val = relation?.value

	return typeof val === 'object' && val !== null ? val : null
}

// Для массива связей типа tags: [{ relationTo, value: { id, slug, title } | number }]
export function getRelationItems<T extends RelationItem = RelationItem>(
	items: readonly { value?: number | string | T | null }[] | null | undefined,
): T[] {
	if (!items) return []

	return items
		.map((item) => item?.value)
		.filter((val): val is T => typeof val === 'object' && val !== null)
}
