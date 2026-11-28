export function formatHighlightedText(text?: string | null): React.ReactNode {
	if (!text) return null

	const parts = text.split(/(\{\{[^}]+\}\})/g)

	return parts.map((part, index) => {
		const match = part.match(/^\{\{(.+)\}\}$/)

		if (match) {
			const content = match[1].trim()
			return (
				<span className="text-gradient" key={index}>
					{content}
				</span>
			)
		}

		return part
	})
}