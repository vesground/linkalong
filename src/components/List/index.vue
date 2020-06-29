<template>
  <div class='list'>
    <div class='header'>
      <TextField text='Type' />
      <TextField text='Document Preview' />
    </div>
    <div class='items'>
      <Item v-for='item in items' v-bind:key="item.id" :item='item' :icon='icon' :handleClick="handleClick" />
    </div>
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import Item from 'components/List/Item/index.vue';

  export default {
    name: 'List',
    props: {
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
