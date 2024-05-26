import { defineConfig } from 'vitepress';
import { nav } from './config/nav';
import sidebar from './config/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  title: "Cyan's Blog",
  themeConfig: {
    nav,
    sidebar,
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    logo: 'https://avatars.githubusercontent.com/u/79911206?s=40&v=4',
    socialLinks: [{ icon: 'github', link: 'https://github.com/cyan0714' }],

    editLink: {
      pattern: 'https://github.com/cyan0714/vitepress-blog',
    },
  },
  lastUpdated: true,
});
