<template>
  <div>
    <h1>VUE 3 ADMIN</h1>
    <v3-base />
  </div>
</template>

<script lang="ts">
import {defineAsyncComponent} from 'vue'
export default {
  components: {
    'v3-base': defineAsyncComponent(() => import('@empfe/base/App')),
  },
  setup() {},
}
</script>

<style lang="scss" scoped>
h1 {
  color: #222;
}
</style>
