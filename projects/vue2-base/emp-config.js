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
          title: 'EMP Vue2 Base',
        },
      }
      return args
    })
  },
  webpack() {
    return {
      devServer: {
        port: 9002,
      },
    }
  },
  async moduleFederation() {
    return {
      name: 'vue2Base',
      filename: 'emp.js',
      exposes: {
        './Content': './src/components/Content',
      },
      // shared: ['vue/dist/vue.esm.js'],
    }
  },
}
