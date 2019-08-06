<template>
  <div class="displayCentered" v-if="isAppLoading">
    <app-loader size="150"></app-loader>
  </div>
  <div class="Marketplace" v-else>
    <NavigationAppSubHeader />
    <v-container grid-list-md fluid class="Marketplace__Container">
      <v-layout row wrap justify-start>
        <v-flex v-for="(provider, index) in providerList" :key="index" shrink>
          <CardProvider :provider="provider" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from '@/mixins/breadcrumbs'
import AppLoader from '@/components/Common/Loader'

import { mapState, mapActions } from 'vuex'

export default {
  mixins: [Breadcrumbs],
  components: {
    AppLoader
  },
  data() {
    return {
      // Added temporarirly. remove later
      providers: [
        { id: 'temp1', name: 's3' },
        { id: 'temp2', name: 'sfdc' },
        { id: 'temp3', name: 'snowflake' }
      ]
    }
  },
  computed: {
    ...mapState('common', {
      isAppLoading: 'isAppLoading'
    }),
    ...mapState('marketplace', {
      providerList: 'providerList'
    })
  },
  methods: {
    ...mapActions('marketplace', {
      getProviderList: 'getProviderList'
    })
  },
  mounted() {
    /** Display current section in breadcrumbs */
    this.setBreadcrumbs([{ text: this.$route.name, disabled: false }])
  }
}
</script>
<style>
.displayCentered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>

