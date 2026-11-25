import { Locale } from './config'

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

const dictionaries = {
	// uk: () => import('./dictionaries/uk.json').then((m) => m.default),
	uk: () => import('./dictionaries/en.json').then((m) => m.default),
	en: () => import('./dictionaries/en.json').then((m) => m.default),
}

export async function getDictionary(locale: Locale) {
	return dictionaries[locale]()
}
