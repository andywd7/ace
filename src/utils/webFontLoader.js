/**
 * Web Font Loader takes care of Vue Design System’s font loading.
 * For full documentation, see: https://github.com/typekit/webfontloader
 */
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,500|Source+Code+Pro:300,400']
  }
})
