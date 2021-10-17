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
    shared: {
      vue: {requiredVersion: pkg.dependencies.vue},
    },
  },
}
