<template>
  <div class='modal' v-show="isOpen">
    <div class="container">
      <IconBase iconName="modal-close" :handleClick='close'>
        <CloseIcon />
      </IconBase>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>


</template>

<script>
import CloseIcon from 'icons/ModalCloseIcon.vue';
import IconBase from 'components/IconBase/index.vue';

export default {
  name: 'ModalBase',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    close: {
      type: Function,
      required: true,
    },
  },
  components: { CloseIcon, IconBase },
}
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
