<template>
  <div id="app" class='app'>
    <Breadcrumbs />
    <router-view />
  </div>
</template>

<script>
  import Breadcrumbs from 'components/Breadcrumbs/index.vue'

  export default {
    name: 'App',
    components: {
      Breadcrumbs
    }
  }
</script>

<style lang='scss'>
  @import './service/style/root.scss';
</style>
