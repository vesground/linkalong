<template>
  <ModalBase :isOpen='isOpen' :close="close">
    <div class='create-document-modal'>
      <TextField>Documents</TextField>
      <textarea v-model="text" placeholder="paste text"></textarea>
      <Button :handleClick="saveDocument">Create</Button>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from 'components/ModalBase/index.vue';
import TextField from 'components/Text/index.vue';
import Button from 'components/Button/index.vue';
import { createText } from 'service/api.js';

export default {
  name: 'CreateDocumentModal',
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
  data: () => ({
    text: ''
  }),
  components: { TextField, Button, ModalBase },
  methods: {
    async saveDocument() {
      console.log('create text');
      const response = await createText(this.text);
      this.text = '';
      // close();
      this.$router.push(`document/${response.data.id}`);
    },
  }
}
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
