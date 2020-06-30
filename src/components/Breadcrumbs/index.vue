<template>
  <div class="breadcrumb" v-if="showBreadcrumbs">
    <ul>
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name" @click="redirectTo(breadcrumb)">
        <TextField>
          {{ breadcrumb.title }}
        </TextField>
      </li>
    </ul>
  </div>
</template>

<script>
import TextField from 'components/Text/index.vue';
import routes from 'routes.js';

export default {
  name: 'Breadcrumb',
  data () {
    return {
      showBreadcrumbs: false,
      breadcrumbs: []
    }
  },
  created() {
    this.setBreadcrumbs();
  },
  watch: { '$route' () { this.setBreadcrumbs() } },
  components: { TextField },
  methods: {
    setBreadcrumbs() {
      const { params, path } = this.$route;
      let currentPath = path;

      for (const param in params) {
        currentPath = path.replace(params[param], `:${param}`);
      };

      const crumbs = routes
        .filter(({ path, breadcrumb }) => currentPath.includes(path) && breadcrumb)
        .map(({ name, path, breadcrumb }) => ({ name, path, title: breadcrumb?.title || breadcrumb }));
      const currentBreadcrumb = routes.find(({ path }) => currentPath === path);

      this.showBreadcrumbs = (typeof currentBreadcrumb?.breadcrumb == 'string' && currentBreadcrumb?.breadcrumb)
        || (currentBreadcrumb?.breadcrumb && currentBreadcrumb?.breadcrumb?.show);
      this.breadcrumbs = crumbs;
    },
    redirectTo(breadcrumb) {
      console.log('redirect name', breadcrumb.name);
      this.$router.push({ name: breadcrumb.name });
    },
  }
}
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
