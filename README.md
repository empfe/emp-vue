# emp-vue3
emp vue 3 workspace

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