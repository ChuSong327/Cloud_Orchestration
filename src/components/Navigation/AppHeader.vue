<template>
  <v-toolbar app dark color="#3a73e6" class="AppHeader" dense clipped-left >
    <v-toolbar-side-icon @click="toggleDrawer()" >
      <v-icon>mdi-menu</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title class="headline">
      <!-- <span>ZYZX</span> -->
      <!-- <span class="title font-weight-light px-1">{{ $route.name }}</span> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat fab small>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn flat fab small>
       <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { AppIcon } from '@/components'
export default {
  name: 'AppHeder',
  components: {
    AppIcon
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('common', {
      appViewState: 'appViewState'
    })
  },
  methods: {
    ...mapActions('common', {
      setAppViewState: 'setAppViewState'
    }),
    toggleDrawer() {
      this.setAppViewState({ drawer: !this.appViewState.drawer })
    }
  }
}
</script>
