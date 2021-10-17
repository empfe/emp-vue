const vue3 = require('@empfe/vue3')
const pkg = require('./package.json')
/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
module.exports = {
  compile: [vue3],
  webpack() {
    return {
      devServer: {
        port: 8001,
      },
    }
  },
  moduleFederation: {
    name: 'vue3Base',
    filename: 'emp.js',
    shared: {
      // vue: {eager: true, singleton: true, requiredVersion: pkg.dependencies.vue},//体积会增加，dev模式下会远程组件替换本地组件
      // vue: {requiredVersion: pkg.dependencies.vue}, // dev模式下会远程组件替换本地组件
    },
    exposes: {
      './App': './src/components/App',
    },
  },
}
