<template>
  <div class="document-list">
    <div class='header'>
      <TextField>Documents</TextField>
      <Button :handleClick="openModal">Create New Document</Button>
    </div>
    <List type='Document' :items='items' :icon="icon" :handleClick='openDocumentDetails' />
    <!-- <div>
      <textarea v-model="newDocument" placeholder="paste text"></textarea>
      <button v-on:click="saveText">Save</button>
    </div> -->
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import Button from 'components/Button/index.vue';
  import List from 'components/List/index.vue';
  import DocumentIcon from 'icons/DocumentIcon.vue';

  import { listTexts, createText } from 'service/api.js';
  import { parseBySchema } from 'service/utils.js';
  import { DOCUMENT_SCHEMA } from 'service/enums.js';


  export default {
    name: 'DocmentList',
    async created() {
      const response = await listTexts();
      this.documents = response.data.texts;
    },
    computed: {
      icon: () => ({ name: 'documentList', body: DocumentIcon }),
      items() {
        return this.documents?.map(doc => parseBySchema({ schema: DOCUMENT_SCHEMA, initValues: doc }))  || [];
      }
    },
    data: () => ({
      documents: [],
      newDocument: ''
    }),
    components: { TextField, Button, List },
    methods: {
      // async saveText() {
      //   const response = await createText(this.newDocument);
      //   this.newDocument = '';
      //   this.$router.push(`text/${response.data.id}`);
      // },
      openModal() {},
      openDocumentDetails(documentId) {
        this.$router.push({ name: 'document.edit', params: { id: documentId }});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import './index.scss';
</style>
