import { PropsSection } from '@/TYPES'
import config from '@payload-config'
import { getPayload } from 'payload'
import type { CSSProperties } from 'react'

export default async function Stack({ locale, dict, data }: PropsSection<'stack'>) {
	const { subTitle, title, id_anchor } = data

	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })

	const [frontendRes, backendRes] = await Promise.all([
		payload.find({
			collection: 'tagsFrontend',
			depth: 2,
			locale,
			pagination: false,
			draft: false,
		}),
		payload.find({
			collection: 'tagsBackend',
			depth: 2,
			locale,
			pagination: false,
			draft: false,
		}),
	])

	const tagsFrontend = frontendRes.docs
	const tagsBackend = backendRes.docs

	return (
		<section className="section" id={id_anchor || undefined}>
			<div className="container">
				<div className="section-head section-head--center">
					<p className="eyebrow reveal is-visible">{subTitle}</p>
					<h2
						className="section-title reveal is-visible"
						style={{ '--reveal-delay': '60ms' } as CSSProperties}
					>
						{title}
					</h2>
				</div>
				<div className="stack grid grid--2 grid--gap">
					<div className="reveal is-visible">
						{tagsBackend && (
							<>
								<h3 className="stack__title">Backend</h3>

								<ul className="tag-list tag-list--lg">
									{tagsBackend.map((tag, i) => {
										// return (
										// 	<li key={i} className="tag">
										// 		{tag.title}
										// 	</li>
										// )

										switch (tag.title) {
											case 'Shopware':
												return null
											case 'Typo3':
												return null
											case 'Contao':
												return null
											case 'Yii2':
												return null

											default:
												return (
													<li key={i} className="tag">
														{tag.title}
													</li>
												)
										}
									})}
								</ul>
							</>
						)}
						{tagsFrontend && (
							<>
								<h3 className="stack__title" style={{ marginTop: 28 }}>
									Frontend
								</h3>
								<ul className="tag-list tag-list--lg">
									{tagsFrontend.map((tag, i) => {
										return (
											<li key={i} className="tag">
												{tag.title}
											</li>
										)
									})}
								</ul>
							</>
						)}
					</div>
					<div
						className="code-window reveal is-visible"
						style={{ '--reveal-delay': '140ms' } as CSSProperties}
					>
						<div className="code-window__bar">
							<span className="dot dot--red" />
							<span className="dot dot--yellow" />
							<span className="dot dot--green" />
							<span className="code-window__file">lib/api.ts</span>
						</div>
						<pre className="code-window__body">
							<code>
								<span className="c-com">// Типізований доступ до Strapi</span>
								{'\n'}
								<span className="c-key">import</span> {'{'} <span className="c-type">Project</span>{' '}
								{'}'} <span className="c-key">from</span>{' '}
								<span className="c-str">'@/types/generated'</span>;{'\n'}
								{'\n'}
								<span className="c-key">export async function</span>{' '}
								<span className="c-fn">getProjects</span>(): <span className="c-type">Promise</span>
								&lt;<span className="c-type">Project</span>[]&gt; {'{'}
								{'\n'}
								{'\t'}
								<span className="c-key">const</span> res = <span className="c-key">await</span>{' '}
								<span className="c-fn">fetch</span>({'\n'}
								{'\t'}
								{'\t'}
								<span className="c-str">
									`${'{'}process.env.STRAPI_URL{'}'}/api/projects`
								</span>
								,{'\n'}
								{'\t'}
								{'\t'}
								{'{'} next: {'{'} revalidate: <span className="c-num">60</span> {'}'} {'}'}
								{'\n'}
								{'\t'});{'\n'}
								{'\t'}
								<span className="c-key">if</span> (!res.ok) <span className="c-key">throw new</span>{' '}
								<span className="c-type">Error</span>(<span className="c-str">'API error'</span>);
								{'\n'}
								{'\t'}
								<span className="c-key">const</span> {'{'} data {'}'} ={' '}
								<span className="c-key">await</span> res.<span className="c-fn">json</span>();{'\n'}
								{'\t'}
								<span className="c-key">return</span> data;{'\n'}
								{'}'}
							</code>
						</pre>
					</div>
				</div>
			</div>
		</section>
	)
}
