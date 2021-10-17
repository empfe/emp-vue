# emp-vue3
emp vue 3 workspace

## 调试指令 
+ admin 项目 
  + 调试 `pnpm dev:admin`
  + 构建 `pnpm build:admin`
  + 正式环境调试 `pnpm start:admin`
    + 访问[地址](http://localhost:8002/)

+ h5 项目 
  + 调试 `pnpm dev:h5`
  + 构建 `pnpm build:h5`
  + 正式环境调试 `pnpm start:h5`
  + 访问[地址](http://localhost:8003/)

## 注意事项 
```js
module.exports = {
  compile: [vue3],
  moduleFederation: {
    name: 'vue3Base',
    filename: 'emp.js',
    shared: {
      vue: {eager: true, singleton: true, requiredVersion: pkg.dependencies.vue},//体积会增加，dev模式下会远程组件替换本地组件
      vue: {requiredVersion: pkg.dependencies.vue}, // dev模式下会远程组件替换本地组件
    },
  },
}

```

## 待解决问题 
+ [share module problem](https://github.com/module-federation/module-federation-examples/issues/1225)