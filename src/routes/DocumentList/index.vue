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
import { listTexts, createText } from 'service/api.js';

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
      this.$router.push(`text/${response.data.id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import './index.scss';
</style>
