// const path = require('path')
module.exports = fn => ec => {
  const {config} = ec
  config.resolve.alias.set('vue', '@vue/runtime-dom')
  config.plugin('vue-loader-plugin').use(require('vue-loader').VueLoaderPlugin, [])
  config.module
    .rule('vue-loader')
    .test(/\.vue$/)
    .use('vue-loader')
    .loader(require.resolve('vue-loader'))
  config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').clear()
  //
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  //
  return fn && fn(ec)
}
