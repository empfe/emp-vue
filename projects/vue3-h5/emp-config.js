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
        port: 8003,
      },
    }
  },
  moduleFederation: {
    name: 'vue3H5',
    shared: {
      vue: {requiredVersion: pkg.dependencies.vue},
    },
  },
}
