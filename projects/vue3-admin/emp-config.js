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
        port: 8002,
      },
    }
  },
  moduleFederation: {
    name: 'vue3Admin',
    filename: 'emp.js',
    remotes: {
      '@empfe/base': 'vue3Base@http://127.0.0.1:8001/emp.js',
    },
    shared: {
      // vue: {eager: true, singleton: true, requiredVersion: pkg.dependencies.vue},//体积会增加，dev模式下会远程组件替换本地组件
      vue: {requiredVersion: pkg.dependencies.vue}, // dev模式下会远程组件替换本地组件
    },
  },
}
