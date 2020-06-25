<template>
  <div class="hello">
    <h1>Document details</h1>
    <ol>
      <li
        v-for='sentence in text.sentences'
        v-bind:key="sentence.sentence_id"
      >
        <router-link v-bind:to="{ name: 'search', query: { textId: text.id, sentenceId: sentence.sentence_id }}">
          {{ sentence.sentence }}
        </router-link>
      </li>
    </ol>
    <!-- <div>{{ text }}</div> -->
  </div>
</template>

<script>
import { getText } from 'service/api.js'

export default {
  name: 'DocmentEdit',
  async created() {
    const response = await getText(this.$attrs.id);
    this.text = response.data;
  },
  data: () => ({
    text: {},
  }),
}
</script>

<style lang='scss' scoped>
  @import './DocumentEdit.scss';

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
