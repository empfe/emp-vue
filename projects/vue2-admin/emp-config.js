/**
 * @type {import('@efox/emp-cli').EMPConfig}
 */
module.exports = {
  framework: [require('@empfe/vue2')],
  webpackChain(config) {
    config.plugin('html').tap(args => {
      args[0] = {
        ...args[0],
        ...{
          title: 'EMP Vue2 Project',
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
      name: 'vue2Project',
      filename: 'emp.js',
      remotes: {
        '@v2b': 'vue2Base@http://localhost:8009/emp.js',
      },
    }
  },
}
