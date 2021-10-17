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
    remotes: {
      '@empfe/base': 'vue3Base@http://127.0.0.1:8001/emp.js',
    },
  },
}
