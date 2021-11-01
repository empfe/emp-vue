const vue2 = require('@efox/emp-vue2')
/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
module.exports = {
  framework: [vue2],
  webpackChain(config) {
    config.plugin('html').tap(args => {
      args[0] = {
        ...args[0],
        ...{
          title: 'EMP Vue2 Admin',
        },
      }
      return args
    })
  },
  webpack() {
    return {
      devServer: {
        port: 9001,
      },
    }
  },
  async moduleFederation() {
    return {
      name: 'vue2Admin',
      filename: 'emp.js',
      remotes: {
        '@v2b': 'vue2Base@http://localhost:9002/emp.js',
      },
    }
  },
}
