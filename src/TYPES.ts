import { Locale } from './i18n/config'
import { GeneralDatum } from './payload-types'

export type MetaProps = {
	children: React.ReactNode
	params: Promise<{ locale: Locale; slug?: string }>
}
export type SeoData = NonNullable<GeneralDatum['meta']>
