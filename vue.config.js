const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// vue.config.js
module.exports = {
  configureWebpack: {

    plugins: [
      new PrerenderSPAPlugin({

        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),

        // Required - Routes to render.
        routes: [ '/', '/cbt-app', '/all-or-nothing-thinking', '/discounting-positives', '/emotional-reasoning', '/fortune-telling', '/labeling', '/magnification-or-minimization', '/mental-filter', '/mind-reading', '/other-blame', '/overgeneralization', '/personalization', '/self-blame', '/magical-thinking', '/should-statements' ],

      })
    ]

  },
}
