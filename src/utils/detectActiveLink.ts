// // Для сайтов без многоязычности можно использовать упрощенную версию функции detectActiveLink, которая не учитывает локаль в пути.
// export function detectActiveLink(pathname: string, menuItemPath: string) {
// 	// Приводим путь к формату с ведущим слэшем
// 	// const cleanItemPath = menuItemPath.startsWith('/') ? menuItemPath : `/${menuItemPath}`

// 	const cleanItemSlash =
// 		menuItemPath.length > 1 && menuItemPath.endsWith('/') ? menuItemPath.slice(0, -1) : menuItemPath

// 	const cleanItemPath = cleanItemSlash.startsWith('/') ? cleanItemSlash : `/${cleanItemSlash}`

// 	// Нормализуем текущий pathname (убираем концевой слэш)
// 	const currentPath =
// 		pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

// 	// Проверяем активность
// 	const isActive =
// 		cleanItemPath === `/`
// 			? currentPath === cleanItemPath
// 			: currentPath === cleanItemPath || currentPath.startsWith(`${cleanItemPath}/`)

// 	return isActive
// }

// Для сайтов с многоязычностью необходимо учитывать локаль в пути, поэтому используется более сложная версия функции detectActiveLink, которая убирает локаль из текущего pathname перед сравнением с menuItemPath.
import { locales } from '@/i18n/config'

function stripLocale(path: string, localeList: readonly string[] = locales): string {
	const normalized = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path

	for (const locale of localeList) {
		if (normalized === `/${locale}`) {
			return '/'
		}
		if (normalized.startsWith(`/${locale}/`)) {
			return normalized.slice(locale.length + 1)
		}
	}

	return normalized || '/'
}

export function detectActiveLink(pathname: string, menuItemPath: string): boolean {
	// Приводим путь из админки к формату с ведущим слэшем и без лишнего слэша в конце
	const withSlash = menuItemPath.startsWith('/') ? menuItemPath : `/${menuItemPath}`
	const cleanItemPath =
		withSlash.length > 1 && withSlash.endsWith('/') ? withSlash.slice(0, -1) : withSlash

	// Убираем локаль и хвостовой слэш из текущего pathname
	const currentPath = stripLocale(pathname)

	// Главная страница
	if (cleanItemPath === '/') {
		return currentPath === '/'
	}

	// Внутренние страницы и вложенные разделы
	return currentPath === cleanItemPath || currentPath.startsWith(`${cleanItemPath}/`)
}
