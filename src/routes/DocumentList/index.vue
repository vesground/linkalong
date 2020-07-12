<template>
  <div class="document-list">
    <Header class='header' :withShadow='isListScrolled'>
      <div class='page-info'>
        <TextField>Documents</TextField>
        <Button :handleClick="openModal">Create New Document</Button>
        <CreateDocumentModal :isOpen='isModalOpen' :close="closeModal" />
      </div>
      <ListHeader type='Document' />
    </Header>
    <div class='list' v-scroll='handleScroll'>
      <ListItem v-for='item in items' v-bind:key="item.id" :item='item' :icon='icon' :handleClick="openDocumentDetails" />
    </div>
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import Header from 'components/HeaderBase/index.vue';
  import Button from 'components/Button/index.vue';

  import ListHeader from 'components/List/Header/index.vue';
  import ListItem from 'components/List/Item/index.vue';

  import List from 'components/List/index.vue';
  import DocumentIcon from 'icons/DocumentIcon.vue';
  import CreateDocumentModal from 'routes/DocumentList/CreateDocumentModal/index.vue';

  import { listTexts, createText } from 'service/api.js';
  import DocumentAPI from 'service/api/document.js';
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
      },
      isListScrolled() {
        return this?.elmScrollY > 0 || false;
      },
    },
    data: () => ({
      elmScrollY: 0,
      documents: [],
      isModalOpen: false
    }),
    components: { Header, TextField, Button, List, ListItem, ListHeader, CreateDocumentModal },
    methods: {
      handleScroll(evt, elm) {
        this.elmScrollY = elm.scrollTop || 0;
      },
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
