<template>
  <div class='list-item' v-on:click='handleClick(item.id)'>
    <IconBase :iconName="icon.name">
      <component v-bind:is="icon.body" />
    </IconBase>
    <TextField>{{ item.text }}</TextField>
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import IconBase from 'components/IconBase/index.vue';

  export default {
    name: 'Item',
    props: {
      icon: {
        type: Object,
        required: true
      },
      item: {
        type: Object,
        required: true
      },
      handleClick: {
        type: Function,
        required: false
      },
    },
    components: { TextField, IconBase },
  }
</script>

<style lang='scss'>
  @import './index.scss';
</style>
