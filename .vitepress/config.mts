import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Symbol Not Found",
  description: "Organizational Homepage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Plan', link: '/plan' },
      { text: 'Timeline', link: '/timeline' },
      { text: 'GitHub', link: 'https://github.com/SymbolNotFound' },
    ],

    sidebar: [],
    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]

    footer: {
      message: "This is a super early draft! check back again for links and discussion.",
      copyright: "Copyright &copy; 2024 Symbol Not Found",
    }
  }
})
