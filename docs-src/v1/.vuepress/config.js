module.exports = {
	title: 'Commander 4',
	description: 'Moderation reimagined',
	themeConfig: {
		// git repo
		repo: 'va1kio/commander',
		repoLabel: 'GitHub',
		
		// docs git repo
		docsRepo: 'va1kio/commander-site',
		docsDir: 'docs/v1',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		
		// docs configurations
		sidebar: 'auto',
		lastUpdated: 'Last Updated',
		smoothScroll: true,
		
		// nav
		nav: [
			{ text: 'Home', link: '/pages/getstarted/' },
			{
				text: 'API reference',
				ariaLabel: 'API reference',
				items: [
				  { text: 'Package API', link: '/pages/ref/api/' },
				  { text: 'UI Toolkit', link: '/pages/ref/ui/' },
				]
			},
			{
				text: 'Guides',
				ariaLabel: 'Guides',
				items: [
				  { text: 'Making packages', link: '/pages/guides/packages/' },
				  { text: 'Code of Conduct', link: '/pages/guides/code/' },
				]
			},
		],
		
		// plugins
		plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
	}
}