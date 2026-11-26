// Locales
export type Locale = (typeof locales)[number]

export const locales = ['uk', 'en'] as const
export const defaultLocale: Locale = 'uk'

export const ogLocale = {
	uk: 'uk_UA',
	en: 'en_US',
}

// Dictionaries
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

const dictionaries = {
	// uk: () => import('./dictionaries/uk.json').then((m) => m.default),
	uk: () => import('./dictionaries/en.json').then((m) => m.default),
	en: () => import('./dictionaries/en.json').then((m) => m.default),
}

export async function getDictionary(locale: Locale) {
	const loadDictionary = dictionaries[locale as Locale] ?? dictionaries[defaultLocale]
	return loadDictionary()
}
