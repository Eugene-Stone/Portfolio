export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'uk'

export const locales = ['uk', 'en'] as const

export function ogLocale(locale: Locale) {
	return locale === 'uk' ? 'uk_UA' : locale === 'en' ? 'en_EN' : 'uk_UA'
}
