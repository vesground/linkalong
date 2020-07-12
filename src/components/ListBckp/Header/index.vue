<template>
  <div class='list-header'>
    <TextField>Type</TextField>
    <TextField>{{ type }}</TextField>
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';

  export default {
    name: 'ListHeader',
    props: {
      type: {
        type: String,
        required: true
      },
    },
    components: { TextField, },
  }
</script>

<style lang='scss'>
  @import './index.scss';
</style>
