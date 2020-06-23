<template>
  <div class="hello">
    <h1>Search result for "{{ sentence }}"</h1>
    <ol>
      <li
        v-for='sentence in uniqueSentence'
        v-bind:key="sentence.sentence_id"
      >
        <router-link v-bind:to="{ name: 'document.edit', params: { id: sentence.text_id }}">
          {{ sentence.sentence }}
        </router-link>
        / {{ sentence.similarity }}
      </li>
    </ol>
  </div>
</template>

<script>
import { searchText } from '../service/api.js'

export default {
  name: 'Search',
  async created() {
    const response = await searchText(this.$route.query.textId, this.$route.query.sentenceId);

    const uniqueSentence = response.data.similar_sentences.reduce((unique, item) => {
      const hasItem = unique.find(elm => elm.text_id == item.text_id);
      return hasItem ? unique : [...unique, item];
    }, []);

    this.sentence = response.data.sentence;
    this.uniqueSentence = uniqueSentence;
  },
  data: () => ({
    sentence: "",
    uniqueSentence: []
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ol {
  text-align: start;
  margin-left: 15px;
  padding: 0;
}
li {
  list-style-type: decimal;
  margin: 0 10px;
  padding: 10px 0;
}
a {
  color: #42b983;
}
</style>
