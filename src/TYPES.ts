import { Dictionary, Locale } from './i18n/config'
import { GeneralDatum, Page } from './payload-types'

export type MetaProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}
export type SeoData = NonNullable<GeneralDatum['meta']>

export type PageProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}

type SectionItem = NonNullable<Page['sections']>[number] // [number] возвращает тип одного элемента из массива
// type Section = Extract<SectionItem, { blockType: 'hero' }>
export type PropsSection<T extends SectionItem['blockType']> = {
	locale: Locale
	dict: Dictionary
	data: Extract<SectionItem, { blockType: T }>
}
