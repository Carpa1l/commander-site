module.exports = {
	title: 'Commander 4',
	description: 'Moderation reimagined',
	themeConfig: {
		// git repo
		repo: 'va1kio/commander',
		repoLabel: 'GitHub',
		
		// docs git repo
		docsRepo: 'va1kio/commander-site',
		docsDir: 'docs-src/v1',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		
		// docs configurations
		sidebar: 'auto',
		lastUpdated: 'Last Updated',
		smoothScroll: true,
		
		// markdown extensions
		markdown: {
			lineNumbers: true,	
		},
		
		// nav
		nav: [
			{ text: 'Home', link: '/pages/home/' },
			{
				text: 'API reference',
				ariaLabel: 'API reference',
				items: [
				  { text: 'Package API', link: '/pages/ref/api/' },
				  { text: 'UI Toolkit', link: '/pages/ref/ui/' },
				  { text: 'Others', link: '/pages/ref/other/' },
				]
			},
			{
				text: 'Guides',
				ariaLabel: 'Guides',
				items: [
				  { text: 'Group admins', link: '/pages/guides/groupadmins/' },
				  { text: 'Installing themes', link: '/pages/guides/installthemes/' },
				  { text: 'Installing packages', link: '/pages/guides/installpkg/' },
				  { text: 'Making packages', link: '/pages/guides/makepkg/' },
				  { text: 'Code of Conduct', link: '/pages/guides/code/' },
				  { text: 'Submission guidelines', link:'/pages/guides/submit/' }
				]
			},
		],
		
		// plugins
		plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
	}
}
