import type { TranslateResolver } from '@payload-enchants/translator/resolvers/types'

const makePrompt = (localeFrom: string, localeTo: string, texts: string[]) =>
	`Translate the following JSON array of strings from "${localeFrom}" to "${localeTo}". Return ONLY a valid JSON array of strings in the exact same order and length: ${JSON.stringify(texts)}`

const parseArray = (raw: string): string[] => {
	const cleaned = raw.replace(/^```(?:json)?\s*|\s*```$/g, '').trim()
	const parsed = JSON.parse(cleaned)
	if (!Array.isArray(parsed)) throw new Error('Expected JSON array')
	return parsed.map(String)
}

export const openRouterResolver: TranslateResolver = {
	key: 'openrouter',
	resolve: async ({ localeFrom, localeTo, texts }) => {
		const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.OPENROUTER_API_KEY || ''}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				model: 'openrouter/free',
				messages: [{ role: 'user', content: makePrompt(localeFrom, localeTo, texts) }],
			}),
		})

		if (!res.ok) {
			return { success: false, error: `OpenRouter status ${res.status}` }
		}

		const data = await res.json()
		const content = data?.choices?.[0]?.message?.content ?? ''
		return { success: true, translatedTexts: parseArray(content) }
	},
}

export const geminiResolver: TranslateResolver = {
	key: 'gemini',
	resolve: async ({ localeFrom, localeTo, texts }) => {
		const key = encodeURIComponent(process.env.GEMINI_API_KEY || '')
		const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`

		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				contents: [{ parts: [{ text: makePrompt(localeFrom, localeTo, texts) }] }],
			}),
		})

		if (!res.ok) {
			return { success: false, error: `Gemini status ${res.status}` }
		}

		const data = await res.json()
		const content = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
		return { success: true, translatedTexts: parseArray(content) }
	},
}
