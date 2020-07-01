<template>
  <div class="document-list">
    <div class='header'>
      <TextField>Documents</TextField>
      <Button :handleClick="openModal">Create New Document</Button>
      <CreateDocumentModal :isOpen='isModalOpen' :close="closeModal" />
    </div>
    <List type='Document' :items='items' :icon="icon" :handleClick='openDocumentDetails' />
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import Button from 'components/Button/index.vue';
  import List from 'components/List/index.vue';
  import DocumentIcon from 'icons/DocumentIcon.vue';
  import CreateDocumentModal from 'routes/DocumentList/CreateDocumentModal/index.vue';

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
      isModalOpen: false
    }),
    components: { TextField, Button, List, CreateDocumentModal },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      openDocumentDetails(documentId) {
        this.$router.push({ name: 'document.edit', params: { id: documentId }});
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
