const path = require('path')
// const baseConfig = require('../build/webpack.base.conf.js')
// const merge = require('webpack-merge')
const packageConfig = require('../package.json')
const chalk = require('chalk')
const docTokens = require('../docs/docs.tokens.json')

module.exports = {
  /**
   * Name of your design system. Changes both page title and sidebar logo.
   */
  title: 'Netace',
  /**
   * Most of the styles are defined in /docs/styles/docs.styles.scss
   */
  version: packageConfig.version,
  theme: {
    maxWidth: '100%',
    sidebarWidth: 240,
    fontFamily: {
      base: [docTokens.props.font_text.value],
      monospace: ['Consolas', "'Liberation Mono'", 'Menlo', 'monospace']
    }
  },
  /**
   * Define a custom code highlighting theme.
   */
  editorConfig: {
    theme: 'night'
  },
  /**
   * Path to static assets directory
   */
  assetsDir: path.join(__dirname, '../src/assets'),
  /**
   * Enabling the below option will break things in Netace!
   */
  skipComponentsWithoutExample: false,
  /**
   * We’re defining below JS and SCSS requires for the documentation.
   */
  require: [
    path.join(__dirname, './styleguide.global.requires.js'),
    path.join(__dirname, '../docs/docs.helper.js'),
    path.join(__dirname, '../docs/styles/docs.styles.scss')
  ],
  /**
   * Enabling the following option splits sections into separate views.
   */
  pagePerSection: true,
  sections: [
    {
      name: 'Getting Started',
      content: '../docs/getting-started.md',
      // Needs to be loaded in somewhere as this is also shown in
      // element, Pattern & Template overviews.
      components: () => [
        '../docs/components/status/Components.vue'
      ],
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Design Tokens',
      content: '../docs/tokens.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide',
      components: () => [
        '../docs/components/tokens/All.vue',
        '../docs/components/tokens/Color.vue',
        '../docs/components/tokens/FontSize.vue',
        '../docs/components/tokens/Spacing.vue'
      ]
    },
    {
      name: 'Elements',
      content: '../docs/elements.md',
      components: () => [
        '../src/components/**/[A-Z]*.vue'
      ],
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2
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
      components: '../src/**/[_]*.vue'
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
  styleguideDir: '../dist/docs',
  printServerInstructions () {},
  printBuildInstructions (config) {
    console.log(chalk.cyan('\n  Design System Docs build finished succesfully!\n'))
    console.log(
      chalk.yellow(
        '  Tip: You can now deploy the docs as a static website.\n' +
          '  Copy the build files from ' +
          `${config.styleguideDir}\n`
      )
    )
  }
  /**
   * Configure docs server to redirect asset queries
   */
  // configureServer(app) {
  //   // `app` is the instance of the express server running the docs
  //   app.get("/assets/:file", (req, res) => {
  //     res.redirect(req.params.file)
  //   })
  // }
}
