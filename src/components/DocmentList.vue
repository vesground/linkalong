<template>
  <div class="hello">
    <h1>Test task for linkalong</h1>
    <ol>
      <li v-for='text in texts' v-bind:key="text.id">{{ text.preview }}</li>
    </ol>
    <div>{{ texts }}</div>
    <div>
      <textarea v-model="newText" placeholder="paste text"></textarea>
      <button v-on:click="counter += 1">Save</button>
    </div>
  </div>
</template>

<script>
import { listTexts, createText } from '../service/api.js'

export default {
  name: 'Main',
  async created() {
    const response = await listTexts();
    this.texts = response.data.texts;
  },
  data: () => ({
    texts: [],
    newText: ''
  }),
  methods: {
    saveText: async () => {
      await createText(this.newText);
      this.newText = '';
    }
  }
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
