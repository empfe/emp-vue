// const path = require('path')
module.exports = fn => ec => {
  const {config} = ec
  // reset script
  config.module.rules.store.delete('scripts')
  // vue3
  config.module
    .rule('vue-loader')
    .test(/\.vue$/)
    .use('vue-loader')
    .loader(require.resolve('vue-loader'))
  // ts
  config.module
    .rule('ts-loader')
    .test(/\.tsx?$/)
    .exclude.add(/node_modules/)
    .end()
    .use('ts-loader')
    .loader(require.resolve('ts-loader'))
    .options({appendTsSuffixTo: [/\.vue$/]})
  // alias vue
  // config.resolve.alias.set('vue', '@vue/runtime-dom')
  // plugin
  config.plugin('vue-loader-plugin').use(require('vue-loader').VueLoaderPlugin, [])
  return fn && fn(ec)
}
