<template>
  <v-app>
    <router-view v-if="!authenticationRequired" />
    <v-content v-else class="grey--text white">
      <NavigationNavbar />
      <router-view />
    </v-content>
    <NavigationAppFooter />
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
require('dotenv').config()

export default {
  computed: {
    ...mapState('common', {
      authenticationRequired: 'authenticationRequired'
    })
  },
  methods: {
    ...mapActions('common', {
      setAppLoadingState: 'setAppLoadingState'
    }),
    ...mapActions('marketplace', {
      getProviderList: 'getProviderList'
    }),
    async getInitialData() {
      /** Retrieve a list of current availalbe providers */
      await Promise.all([this.getProviderList()])
    }
  },
  created() {
    this.setAppLoadingState(true)
    this.getInitialData()
    this.setAppLoadingState(false)
  }
}
</script>
<style lang="stylus">
@import "/styles/index.styl"
</style>
