<template>
  <button class='button' @onclick="handleClick">
    <TextField><slot/></TextField>
  </button>
</template>

<script>
  import TextField from 'components/Text/index.vue';

  export default {
    name: 'Button',
    props: {
      text: {
        type: String,
        required: false
      },
      handleClick: {
        type: Function,
        required: false
      }
    },
    components: {
      TextField
    }
  }
</script>

<style lang='scss'>
  @import './index.scss';
</style>
