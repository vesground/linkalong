<template>
  
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import Item from 'components/List/Item/index.vue';

  export default {
    name: 'List',
    props: {
      type: {
        type: String,
        required: true
      },
      icon: {
        type: Object,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      handleClick: {
        type: Function,
        required: false
      },
    },
    components: { TextField, Item },
  }
</script>

<style lang='scss'>
  @import './index.scss';
</style>
