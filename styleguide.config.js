const path = require('path')
const baseConfig = require('./build/webpack.base.conf.js')
const merge = require('webpack-merge')
const packageConfig = require('./package.json')
// const chalk = require('chalk')

module.exports = {
  /**
   * Name of your design system. Changes both page title and sidebar logo.
   */
  title: 'Netace Design System',
  /**
   * Most of the styles are defined in /docs/styles/docs.styles.scss
   */
  version: packageConfig.version,
  theme: {
    maxWidth: '100%',
    sidebarWidth: 240,
    fontFamily: {
      base: ["'Roboto'", 'Helvetica', 'Arial', 'sans-serif'],
      monospace: ['Consolas', "'Liberation Mono'", 'Menlo', 'monospace']
    }
  },
  renderRootJsx: path.join(__dirname, 'docs/components/Preview.js'),
  /**
   * Define a custom code highlighting theme.
   */
  editorConfig: {
    theme: 'night'
  },
  /**
   * Path to static assets directory
   */
  assetsDir: path.join(__dirname, 'src/assets'),
  /**
   * Enabling the below option will break things in Vue Design System!
   */
  skipComponentsWithoutExample: false,
  /**
   * We’re defining below JS and SCSS requires for the documentation.
   */
  require: [
    path.join(__dirname, 'docs/docs.helper.js'),
    path.join(__dirname, 'docs/styles/docs.styles.scss')
  ],
  /**
   * Enabling the following option splits sections into separate views.
   */
  pagePerSection: true,
  sections: [
    {
      name: 'Getting Started',
      content: 'docs/getting-started.md',
      // Needs to be loaded in somewhere as this is also shown in
      // element, Pattern & Template overviews.
      components: () => [
        'docs/components/status/Components.vue'
      ],
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Design Principles',
      content: 'docs/principles.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Voice & Tone',
      content: 'docs/voice-and-tone.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    // {
    //   name: 'Design Tokens',
    //   content: '../docs/tokens.md',
    //   sectionDepth: 1,
    //   exampleMode: 'hide',
    //   usageMode: 'hide',
    //   components: () => [
    //     '../docs/components/tokens/All.vue',
    //     '../docs/components/tokens/Color.vue',
    //     '../docs/components/tokens/FontSize.vue',
    //     '../docs/components/tokens/Spacing.vue'
    //   ]
    // },
    {
      name: 'Elements',
      content: 'docs/elements.md',
      components: () => [
        'src/components/**/[A-Z]*.vue'
      ],
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2
    },
    {
      name: 'Downloads',
      content: 'docs/downloads.md',
      exampleMode: 'hide',
      usageMode: 'hide',
      sectionDepth: 1
    },
    {
      /**
       * Private components have to be loaded into the documentation as well,
       * otherwise anything using them will be broken. We’re loading them in
       * their own section, which then gets hidden in docs/styles/docs.styles.scss
       */
      name: 'Private Components',
      exampleMode: 'hide',
      usageMode: 'hide',
      components: 'src/**/[_]*.vue'
    }
  ],
  /**
   * Custom wrapper template for the documentation.
   */
  template: {
    title: 'Netace',
    lang: 'en',
    trimWhitespace: true,
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
        }
      ]
    }
  },
  /**
   * Ignore app.vue, tests, and example component.
   */
  ignore: [
    '**/App.vue',
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/ExampleComponent.vue'
  ],
  webpackConfig: merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.(css?|scss|sass)(\?.*)?$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.join(__dirname, 'src/assets/tokens/tokens.scss'),
                  path.join(__dirname, 'src/assets/tokens/tokens.map.scss'),
                  path.join(__dirname, 'src/styles/toolbox.scss'),
                  path.join(__dirname, 'docs/styles/docs.toolbox.scss')
                ]
              }
            }
          ]
        }
      ]
    }
  })
}
