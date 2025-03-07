import { defineConfig } from 'vitepress'
import { nav } from './relaConf';
import {sidebar} from './relaConf/sidebar.js'

// https://vitepress.dev/reference/site-config

export const globals = [
]
export default defineConfig({
  base: '/zhujh-blog/',
  title: '小辉同学',
  description: "Default Theme",
  themeConfig: {
    logo: './avatar.png',// 表示docs/public/avartar.png
    nav:nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjh19961025' }
    ],
    search: {
      provider: 'local' // 开启本地搜索
    },
    sidebar,
    footer: {
      message: 'Follow Me',
      copyright: 'Copyright © 2024-present zhujh'
    }
    // i18nRouting: true //开启中英文
  },
  enhanceApp: ({ app }) => {
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})

