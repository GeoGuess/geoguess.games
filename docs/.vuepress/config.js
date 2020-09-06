const { description } = require('../../package')

const nav = (prefix) => [
  {
    text: 'Guide',
    link: `${prefix}/guide/`,
  },
  {
    text: 'RoadMap',
    link: `${prefix}/ROADMAP.html`,
  },
  {
    text: 'Demo',
    link: 'https://geoguess2.netlify.app/'
  }
]


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GeoGuess',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1a2372' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'GeoGuess-2/geoguess-2.github.io',
    editLinks: true,
    search: true,
    docsDir: 'docs',
    lastUpdated: true,
    nav: nav(''),
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          
        },
      },
      '/fr/': {
        label: 'Français',
        selectText: 'Langue',
        ariaLabel: 'Selectionner une langue',
        editLinkText: 'Editer cette page sur Github',
        lastUpdated: 'Dernière modification',     
        nav: nav('/fr'),
        sidebar: {
          '/fr/guide/': [
            {
              title: 'Guide',
              collapsable: true,
              children: [
                ''
              ]
            }
          ],
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'GeoGuess',
      description: 'Vue-powered Static Site Generator'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'GeoGuess',
      description: 'Un jeu Open Source avec Google Map StreetView.'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
