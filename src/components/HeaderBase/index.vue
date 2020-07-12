<template>
  <div :class="{ 'header': true, 'bottom-shadow': withShadow }"><slot/></div>
</template>

<script>
  export default {
    name: 'HeaderBase',
    props: {
      withShadow: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style lang='scss'>
  @import './index.scss';
</style>
