<template>
  <div class="main">
    <h1>Project App</h1>
    <Content />
    <App />
  </div>
</template>

<script>
//import Content from "@v2b/Content"
export default {
  components: {
    App: () => import('@v2h5/App'),
    Content: () => import('@v2b/Content'),
  },
}
</script>

<style scoped lang="scss">
.main {
  img {
    width: 200px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 60px;
  }
}
</style>
