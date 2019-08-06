<template>
  <v-footer height="20" color="#D8D5DD lighten-1" class="AppFooter">
    <v-spacer></v-spacer>
    <div class="AppFooter__Items">
      <span v-for="link in links" :key="link.name" class="px-2">
        <a :href="link.Link" target="_blank">{{ link.name }}</a> |
      </span>
    </div>
    <span class="AppFooter__Copyright font-weight-light">v{{ version }} &copy;{{ new Date().getFullYear() }} ZX</span>
    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </v-footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      version: require('../../../package.json').version,
      links: [
        { name: 'Home', Link: '/dashboard' },
        { name: 'About Us', Link: 'https://www.google.com/search?q=ZX' },
        {
          name: 'Blog',
          Link: 'https://medium.com/s/story/do-less-2c81556edce5'
        }
      ]
    }
  }
}
</script>