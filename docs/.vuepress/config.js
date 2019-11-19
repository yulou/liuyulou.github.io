const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Yulou Liu\'s Personal Website',
	dest: './public',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' }, 
			{ text: 'Blog', link: '/' },
		],
		logo: '/favicon.jpg'
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.jpg' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/favicon.jpg' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/favicon.jpg' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
