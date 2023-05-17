
const nav = (prefix) => [
  {
    text: 'Guide',
    link: `${prefix}/guide/`,
  },
  {
    text: 'Demo',
    link: 'https://demo.geoguess.games/'
  }
]


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GeoGuess',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/icons/apple-icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {src:"https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"}]
],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/GeoGuess/GeoGuess/contribute',
    search: true,
	  docsRepo: 'GeoGuess/geoguess.games',
    docsDir: 'docs',
    editLinks: true,
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
                '',
                '/guide/instructions',
                '/guide/update',
                '/guide/twa',
              ]
            },
            {
              title: 'Contribution',
              collapsable: false,
              children: [
                '/guide/dev/maps',
                '/guide/dev/areas'
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
                '',
                '/fr/guide/instructions',
              ]
            }
          ],
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en',
      title: 'GeoGuess',
      description: 'GeoGuess is an OpenSource geographic game with Google Map Street View. Start a single or multiplayer round and guess where you are.',
    },
    '/fr/': {
      lang: 'fr',
      title: 'GeoGuess',
      description: 'GeoGuess est un jeu de géographie open-souce avec Google Map Street View. Vous pouvez jouer en solo ou avec des amis en simultané.',
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['sitemap', {
      hostname: 'https://geoguess.games/'
    }],
    [ 'autometa', {
        canonical_base: 'https://geoguess.games/',
        site: {
            name   : 'GeoGuess',
        },  
        author: {
            name   : 'Bilel Jegham',
            twitter: '@BilelJegham',
        },
         image_sources: [
             /<!--imageSocial["'](.*?)['"]/i,
             
			/!\[.*?\]\((.*?)\)/i,					// markdown image regex
			/<img.*?src=['"](.*?)['"]/i,
        ]
    } ],
    [
        '@vuepress/google-analytics',
        {
            'ga': 'G-432SV6EFJC' // UA-00000000-0
        }
    ],
    [
      "vuepress-plugin-google-adsense",
      {
        adClient: "ca-pub-3283982605864712", 
      },
    ],
  ]
}
