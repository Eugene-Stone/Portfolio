import type { Media } from '@/payload-types'
import placeholder from 'public/images/placeholder-image.png'

export type ImageInput = number | Media | null | undefined
// export type NormalizedMedia = Pick<Media, 'url' | 'width' | 'height' | 'alt'> & Partial<Media>

export type NormalizedMedia = Partial<Omit<Media, 'url' | 'width' | 'height' | 'alt'>> & {
	url: string
	width: number
	height: number
	alt: string
}

const placeholderMedia: NormalizedMedia = {
	url: placeholder.src,
	width: placeholder.width,
	height: placeholder.height,
	alt: 'Image',
}

export function imageObj(image: ImageInput): NormalizedMedia {
	if (typeof image === 'object' && image !== null && image.url) {
		return {
			url: image.url,
			width: image.width || 100,
			height: image.height || 100,
			alt: image.alt || 'Image',
		}
	}

	return placeholderMedia
}

export function imageId(image: ImageInput): number | null {
	if (typeof image === 'number') return image
	if (typeof image === 'object' && image !== null && typeof image.id === 'number') {
		return image.id
	}
	return null
}
