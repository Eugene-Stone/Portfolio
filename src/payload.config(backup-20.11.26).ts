import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import {
	EXPERIMENTAL_TableFeature,
	FixedToolbarFeature,
	lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Plugins
import { openapi, swaggerUI } from 'payload-oapi'
import { htmlEditorPlugin } from 'payload-html-editor'

import OpenAI from 'openai'
import {
	collectionLevel,
	createPayloadJobsRunner,
	createTranslationProvider,
	documentLevel,
	openAIComplete,
	translatorPlugin,
	type AccessGuard,
} from '@focus-reactive/payload-plugin-translator'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Доступ к эндпоинтам перевода — только авторизованным пользователям админки
const translatorAccess: AccessGuard = {
	check: ({ req }) => Boolean(req.user),
}

// // Вариант 1: OpenRouter (модель openrouter/free)
// const openRouterClient = new OpenAI({
// 	apiKey: process.env.OPENROUTER_API_KEY || '',
// 	baseURL: 'https://openrouter.ai/api/v1',
// 	defaultHeaders: {
// 		'HTTP-Referer': process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
// 		'X-Title': 'Payload CMS Translator',
// 	},
// })

// Вариант 2: Gemini через OpenAI-совместимый эндпоинт (раскомментируй при необходимости)
const geminiOpenAIClient = new OpenAI({
	apiKey: process.env.GEMINI_API_KEY || '',
	baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
})

import { Users } from './app_payload/collections/Users'
import { Media } from './app_payload/collections/Media'
import { Cases } from './app_payload/collections/Cases'
import { GeneralData } from './app_payload/globals/GeneralData'
import { TagsFrontend } from './app_payload/collections/TagsFrontend'
import { CasesCategory } from './app_payload/collections/CasesCategory'
import { TagsBackend } from './app_payload/collections/TagsBackend'
import { Pages } from './app_payload/collections/Pages'
import { HomePage } from './app_payload/globals/HomePage'
import { Forms } from './app_payload/collections/Forms'
import { FormRequests } from './app_payload/collections/FormRequests'

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
		components: {
			// Добавляем собственную ссылку после стандартных ссылок навигации.
			afterNavLinks: [
				'@/app_payload/components/ApiLink#ApiLink',
				// '@/app_payload/components/SidebarLink#SidebarLink_2',
			],
		},
		meta: {
			titleSuffix: '- Eugene Stone',
			icons: [
				{
					rel: 'icon',
					type: 'image/png',
					url: '/images/favicon-admin.png', // путь относительно папки public
				},
			],
		},
	},
	collections: [
		Pages,
		Media,
		Users,
		Cases,
		CasesCategory,
		TagsFrontend,
		TagsBackend,
		Forms,
		FormRequests,
	],
	globals: [GeneralData, HomePage],

	// Конфигурация едитора с верхней панелью
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [
			...defaultFeatures,
			FixedToolbarFeature(),
			EXPERIMENTAL_TableFeature(),
		],
	}),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL || '',
		},
	}),
	sharp,

	localization: {
		locales: [
			{
				label: 'English',
				code: 'en',
			},
			{
				label: 'Українська',
				code: 'uk',
			},
		],
		defaultLocale: 'uk',
		fallback: true, // если перевод поля для текущей локали не заполнен, подставит defaultLocale
	},

	plugins: [
		htmlEditorPlugin({
			mediaCollection: 'media',
		}),
		seoPlugin({
			globals: ['homePage'],
			collections: ['pages', 'cases'],
			uploadsCollection: 'media',
			// tabbedUI: true,

			generateTitle: ({ doc }) => {
				return doc?.title ? `${doc.title} | Website` : 'Payload Website'
			},
			generateDescription: ({ doc }) => doc.description,
			generateURL: ({ doc }) => {
				// const url =
				// 	process.env.NEXT_PUBLIC_SERVER_URL ||
				// 	(process.env.VERCEL_PROJECT_PRODUCTION_URL
				// 		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
				// 		: 'http://localhost:3000')

				const url = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

				return doc?.slug ? `${url}/${doc.slug}` : url
			},

			fields: ({ defaultFields }) => [
				// // Стандартное поведение
				// ...defaultFields,

				// Для локализированой версии
				...defaultFields.map((field) => {
					// Делаем локализованными базовые поля title и description
					// (при необходимости добавить и 'image')
					if ('name' in field && (field.name === 'title' || field.name === 'description')) {
						return {
							...field,
							localized: true,
						}
					}
					return field
				}),

				{
					name: 'keywords',
					type: 'textarea',
					label: 'Keywords',
					localized: true, // Для локализированой версии
				},

				{
					name: 'canonicalUrl',
					type: 'text',
					label: 'Canonical URL',
					localized: false, // обычно общий URL
				},

				{
					name: 'metaRobots',
					type: 'select',
					label: 'Robots',
					defaultValue: 'index,follow',
					options: [
						{
							label: 'Index, Follow',
							value: 'index,follow',
						},
						{
							label: 'Noindex, Follow',
							value: 'noindex,follow',
						},
						{
							label: 'Index, Nofollow',
							value: 'index,nofollow',
						},
						{
							label: 'Noindex, Nofollow',
							value: 'noindex,nofollow',
						},
					],
				},

				{
					name: 'ogTitle',
					type: 'text',
					label: 'OG Title',
					localized: true, // Для локализированой версии
				},

				{
					name: 'ogDescription',
					type: 'textarea',
					label: 'OG Description',
					localized: true, // Для локализированой версии
				},

				{
					name: 'ogImage',
					type: 'upload',
					relationTo: 'media',
					label: 'OG Image',
					localized: false, // обычно общий URL
				},

				// {
				// 	name: 'ogUrl',
				// 	type: 'text',
				// 	label: 'OG URL',
				// },

				// {
				// 	name: 'ogType',
				// 	type: 'select',
				// 	label: 'OG Type',
				// 	defaultValue: 'website',
				// 	options: [
				// 		{
				// 			label: 'Website',
				// 			value: 'website',
				// 		},
				// 		{
				// 			label: 'Article',
				// 			value: 'article',
				// 		},
				// 	],
				// },

				{
					name: 'twitterCard',
					type: 'select',
					label: 'Twitter Card',
					defaultValue: 'summary_large_image',
					options: [
						{
							label: 'Summary',
							value: 'summary',
						},
						{
							label: 'Summary Large Image',
							value: 'summary_large_image',
						},
						{
							label: 'App',
							value: 'app',
						},
						{
							label: 'Player',
							value: 'player',
						},
					],
				},

				{
					name: 'twitterTitle',
					type: 'text',
					label: 'Twitter Title',
					localized: true, // Для локализированой версии
				},

				{
					name: 'twitterDescription',
					type: 'textarea',
					label: 'Twitter Description',
					localized: true, // Для локализированой версии
				},

				{
					name: 'twitterImage',
					type: 'upload',
					relationTo: 'media',
					label: 'Twitter Image',
					localized: false, // обычно общий URL
				},

				{
					name: 'structuredData',
					type: 'textarea',
					label: 'Structured Data (JSON-LD)',
					localized: true, // Для локализированой версии
					admin: {
						description: 'JSON-LD structured data in JSON format',
					},
				},
			],
		}),

		// Вызывает конфликт с плагином openapi
		translatorPlugin({
			collections: [Pages, Cases],
			access: translatorAccess,
			levels: [documentLevel(), collectionLevel()],
			translationProvider: createTranslationProvider({
				// Вариант 1: OpenRouter (модель openrouter/free)
				// complete: openAIComplete({
				// 	client: openRouterClient,
				// 	model: 'openrouter/free',
				// 	// Для OpenRouter / бесплатных моделей часто надежнее json_object вместо json_schema
				// 	structuredOutput: 'json_object',
				// 	sampling: { temperature: 0 },
				// }),

				// Вариант 2: Gemini через OpenAI-совместимый эндпоинт
				complete: openAIComplete({
					client: geminiOpenAIClient,
					model: 'gemini-2.5-flash', // или другой доступный ключу ID модели Gemini
					structuredOutput: 'json_object',
					sampling: { temperature: 0 },
				}),
			}),
			runner: createPayloadJobsRunner(),
		}),
		openapi({
			openapiVersion: '3.0',
			metadata: {
				title: 'Dev API',
				version: '1.0.0',
			},
		}),
		/* 
			localhost:3000/api/openapi.json
			localhost:3000/api/docs
		*/
		swaggerUI({}),
	],
})
