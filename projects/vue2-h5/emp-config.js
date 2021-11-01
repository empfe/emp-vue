// 1 引用@efox/emp-vue2的解决方案
const vue2 = require('@efox/emp-vue2')

module.exports = {
  framework: [vue2], // 2 引用解决方案
  webpackChain(config) {
    // webpackChain方式调用修改html模板内容
    config.plugin('html').tap(args => {
      args[0] = {
        ...args[0],
        ...{
          title: 'EMP Vue2 H5',
        },
      }
      return args
    })
  },
  webpack() {
    // 配置服务端口
    return {
      devServer: {
        port: 9003,
      },
    }
  },
  async moduleFederation() {
    return {
      name: 'vue2H5', // 暴露在window下的全局名称，类似jquery中的$
      filename: 'emp.js', // 提供外部访问的文件名
      // 需要增加exposes内容，否则不会编译出emp.js
      exposes: {
        './App': './src/App', // key需要通过./开头，value引用的路径也是相对路径
      },
      remotes: {
        // [引用名称]: 'window下的模块名@远端调用地址'
        '@v2b': 'vue2H5Base@http://localhost:9004/emp.js',
      }, // 引用其它项目配置入口
    }
  },
}
