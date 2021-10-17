<template>
  <div>
    <h1>VUE 3 ADMIN</h1>
    <!-- <v3-base /> -->
    <admin-layout />
    <v3-layout />
  </div>
</template>

<script lang="ts">
import {defineAsyncComponent} from 'vue'
export default {
  components: {
    // 'v3-base': defineAsyncComponent(() => import('@empfe/base/App')),
    'v3-layout': defineAsyncComponent(() => import('@empfe/base/Layout')),
    'admin-layout': defineAsyncComponent(() => import('./Layout.vue')),
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
h1 {
  color: #222;
}
</style>
