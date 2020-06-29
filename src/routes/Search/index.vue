<template>
  <div class="search-list">
    <div class='header'>
      <TextField>Search result for:</TextField>
      <TextField>"{{ sentence }}"</TextField>
    </div>
    <List type='Sentence' :items='items' :icon="icon" :handleClick='openDocumentDetails' />
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import List from 'components/List/index.vue';
  import SearchIcon from 'icons/SearchIcon.vue';

  import { searchText } from 'service/api.js';
  import { parseBySchema } from 'service/utils.js';
  import { FOUND_SENTENCE_SCHEMA } from 'service/enums.js';

  export default {
    name: 'Search',
    async created() {
      const response = await searchText(this.$route.query.textId, this.$route.query.sentenceId);

      this.sentence = response.data.sentence;
      this.foundSentences = response.data.similar_sentences;
    },
    computed: {
      icon: () => ({ name: 'search', body: SearchIcon }),
      items() {
        return  this.foundSentences?.map(sentence => parseBySchema({ schema: FOUND_SENTENCE_SCHEMA, initValues: sentence }))  || [];
      }
    },
    data: () => ({
      sentence: "",
      foundSentences: []
    }),
    components: { TextField, List },
    methods: {
      openDocumentDetails(documentId) {
        this.$router.push({ name: 'document.edit', params: { id: documentId }});
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
