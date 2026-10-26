import { postgresAdapter } from '@payloadcms/db-postgres'
import {
	EXPERIMENTAL_TableFeature,
	FixedToolbarFeature,
	lexicalEditor,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Plugins
import { openapi, swaggerUI } from 'payload-oapi'
import { htmlEditorPlugin } from 'payload-html-editor'

import { Users } from './app_payload/collections/Users'
import { Media } from './app_payload/collections/Media'
import { Cases } from './app_payload/collections/Cases'
import CasesTags from './app_payload/collections/CasesTags'

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
	},
	collections: [Users, Media, Cases, CasesTags],
	// globals: [GlobalFields, Header, Footer, Homepage],

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
	plugins: [
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

		htmlEditorPlugin({
			mediaCollection: 'media',
		}),
	],
})
