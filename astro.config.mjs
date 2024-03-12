import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'File Sense Docs',
			social: {
				github: 'https://github.com/File-Sense/application',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},{
					label: 'Installation',
					items: [
						{label: 'Prerequisites', link: "/installation/prerequisites/"},
						{label: '', link: ''}
					]
				},{
					label: "Give use your Feedback!",
					link: "https://google.com"
				}
			],
		}),
	],
});
