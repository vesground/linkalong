<template>
  <div class="document-list">
    <div class='header'>
      <TextField>Document Details</TextField>
    </div>
    <List type='Sentence' :items='items' :icon="icon" :handleClick='searchForDocmument' />
  </div>
</template>

<script>
  import TextField from 'components/Text/index.vue';
  import List from 'components/List/index.vue';
  import SentenceIcon from 'icons/SentenceIcon.vue';

  import { getText } from 'service/api.js';
  import { parseBySchema } from 'service/utils.js';
  import { SENTENCE_SCHEMA } from 'service/enums.js';

  export default {
    name: 'DocmentEdit',
    async created() {
      const response = await getText(this.$attrs.id);
      this.document = response.data;
    },
    computed: {
      icon: () => ({ name: 'documentEdit', body: SentenceIcon }),
      items() {
        return  this.document?.sentences?.map(sentence => parseBySchema({ schema: SENTENCE_SCHEMA, initValues: sentence }))  || [];
      }
    },
    data: () => ({
      document: {},
    }),
    components: { TextField, List },
    methods: {
      searchForDocmument(sentenceId) {
        this.$router.push({ name: 'search', query: { sentenceId }});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import './index.scss';
</style>
