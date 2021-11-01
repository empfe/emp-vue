<template>
  <div>
    Vue2H5App
    <BaseApp />
  </div>
</template>
<script>
export default {
  components: {
    // 组件名: () => import('alias/引用项目中exposes组件名')
    BaseApp: () => import('@v2b/App'),
  },
}
</script>
