export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'uk'

export const locales = ['uk', 'en'] as const

export const ogLocale = {
	uk: 'uk_UA',
	en: 'en_EN',
}
