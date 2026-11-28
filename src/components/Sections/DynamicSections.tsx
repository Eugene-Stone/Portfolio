import Hero from './Hero'
import Contacts from './Contacts'
import { Page } from '@/payload-types'
import { getDictionary, Locale } from '@/i18n/config'
import Marquee from './Marquee'
import Services from './Services'
import Cases from './Cases'
import Stack from './Stack'

type Props = {
	locale: Locale
	sections: Page['sections']
}

export default async function DynamicSections({ locale, sections }: Props) {
	const dict = await getDictionary(locale)

	return sections?.map((section, i) => {
		switch (section.blockType) {
			case 'hero':
				return <Hero key={i} locale={locale} dict={dict} data={section} />
			case 'marquee':
				return <Marquee key={i} locale={locale} dict={dict} data={section} />
			case 'services':
				return <Services key={i} locale={locale} dict={dict} data={section} />
			case 'cases':
				return <Cases key={i} locale={locale} dict={dict} data={section} />
			case 'stack':
				return <Stack key={i} locale={locale} dict={dict} data={section} />
			case 'contacts':
				return <Contacts key={i} locale={locale} dict={dict} data={section} />

			default:
				return null
		}
	})
}
