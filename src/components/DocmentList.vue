<template>
  <div class="hello">
    <h1>Documents list</h1>
    <ol>
      <li v-for='text in texts' v-bind:key="text.id">
        <router-link v-bind:to="{ name: 'document.edit', params: { id: text.id }}">
          {{ text.preview }}
        </router-link>
      </li>
    </ol>
    <div>
      <textarea v-model="newText" placeholder="paste text"></textarea>
      <button v-on:click="saveText">Save</button>
    </div>
  </div>
</template>

<script>
import { listTexts, createText } from '../service/api.js';
import { router } from '../router.js';

export default {
  name: 'DocmentList',
  async created() {
    const response = await listTexts();
    this.texts = response.data.texts;
  },
  data: () => ({
    texts: [],
    newText: ''
  }),
  methods: {
    async saveText() {
      const response = await createText(this.newText);
      this.newText = '';
      router.push(`text/${response.data.id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea, button {
  margin-right: auto;
  display: block;
}
ol {
  text-align: start;
  margin-left: 20px;
  padding: 0;
}
li {
  list-style-type: decimal;
  margin: 0 10px;
  padding: 10px 0;
}
</style>
