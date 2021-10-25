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
          title: 'EMP Vue2 Element UI',
        },
      }
      return args
    })
  },
  webpack() {
    return {
      devServer: {
        port: 9003,
      },
    }
  },
  async moduleFederation() {
    return {
      name: 'vue2ElementUI',
      filename: 'emp.js',
      exposes: {
        // './Content': './src/components/Content',
      },
      // shared: ['vue/dist/vue.esm.js'],
    }
  },
}
